import React , {createContext, useContext, useEffect, useState} from 'react';
import axios from 'axios';
import { AiOutlineConsoleSql } from 'react-icons/ai';
import { API_URL } from '../requests';

const token = localStorage.getItem("token");

export type UserType = {
    avatar: string;
    bio: string;
    email: string;
    followers: [];
    following: [];
    name: string;
    username: string;
};



export type UserContext = {
    currentUser?: any;
    setCurrentUser: (user: any) => void;
    checkLogin: () => void;
    logout: () => void;
    name: string;
    username: string;
    bio: string;
    avatar: string;
    following: UserType[];
    followers: UserType[];
};

export const CurrentUserContext  = createContext<UserContext>({
    currentUser: undefined,
    setCurrentUser: () => {},
    checkLogin: () => {},
    logout: () => {},
    name: "",
    username: "",
    bio: "",
    avatar: "",
    following: [],
    followers: [],
});

type ProviderProps = {
    children: React.ReactNode;
  };

export const CurrentUserProvider = ({children} : ProviderProps) => {
    const [currentUser, setCurrentUser] = useState<any>();
    const [name, setName] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [bio, setBio] = useState<string>("");
    const [avatar, setAvatar] = useState<string>("");
    const [following, setFollowing] = useState<UserType[]>([]);
    const [followers, setFollowers] = useState<UserType[]>([]);

    const checkLogin = () => {
        if (token) {
            axios.get(`${API_URL}/api/user/me`, {
                headers: {
                    "x-access-token": `${token}`
                }
            })
            .then((res) => {
                setCurrentUser(res.data);
                setName(res.data.name);
                setUsername(res.data.username);
                setBio(res.data.bio);
                setAvatar(res.data.avatar);
                setFollowing(res.data.following);
                setFollowers(res.data.followers);
            })
            .catch((err) => {
                console.log(err);
               
            })
        }
    }

    const logout = () => {
        localStorage.removeItem("token");
        setCurrentUser(undefined);
    }

    

    useEffect(() => {
        checkLogin();
    }, []);

 

  

    return (
        <CurrentUserContext.Provider value={{currentUser, setCurrentUser, checkLogin, logout, name, username, bio, avatar, following, followers}}>
            {children}
        </CurrentUserContext.Provider>
    );
}

export const useCurrentUser = () => {
    return useContext(CurrentUserContext);
}

