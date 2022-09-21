import React , {createContext, useEffect, useState} from 'react';
import axios from 'axios';



export type UserType = {
    avatar: string;
    bio: string;
    email: string;
    followers: number;
    following: number;
    name: string;
    username: string;
};



export type UserContext = {
    currentUser?: any;
    setCurrentUser: (user: any) => void;
    checkLogin: () => void;
    logout: () => void;
};

export const CurrentUserContext  = createContext<UserContext>({
    currentUser: undefined,
    setCurrentUser: () => {},
    checkLogin: () => {},
    logout: () => {},
    
});

type ProviderProps = {
    children: React.ReactNode;
  };

export const CurrentUserProvider = ({children} : ProviderProps) => {
    const [currentUser, setCurrentUser] = useState<any>();
    

    const checkLogin = () => {
        console.log("checkLogin");

        const token = localStorage.getItem("token");
        if (token) {
            axios.get("http://localhost:5000/api/user/me", {
                headers: {
                    "x-access-token": `${token}`
                }
            })
            .then((res) => {
                setCurrentUser(res.data);
               
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
        <CurrentUserContext.Provider value={{currentUser, setCurrentUser, checkLogin, logout  }}>
            {children}
        </CurrentUserContext.Provider>
    );
}