// import React, {useState} from 'react';

import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export const API_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : '';
const axios = require('axios');

const token = localStorage.getItem('token');

export  function createPost(post:any) {
    try {
        const response =  axios.post(`${API_URL}/api/post/createPost`,{
            content: post
        },
        {
            headers: {
                "x-access-token": `${token}` 
                }
                });

        return response.data;
    } catch (e) {
        console.log(e);
    }
}

//create a custom hook do what the function beneath does
export const useFetch = (url: string) => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);


    // fetch data with token header and set data, loading and error
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url, {
                    headers: {
                        "x-access-token": `${token}`
                    }
                });
                setData(response.data);
                setLoading(false);
            } catch (e) {
                setLoading(false);
            }
        };
        fetchData();
    }, [url]);

    return { data, loading };
};


export async function createComment(content:any, postId:any){
    try {
        const response = await axios.post(`${API_URL}/api/comments/createComment/${postId}`,{
            content: content,
        },
        {
            headers: {
                "x-access-token": `${token}` 
                }
                });

        return response.data;
    } catch (e) {
        console.log(e);
    }

}



export async function editUser(name:any, bio:any, avatar:any) {
    try {
        const response = await axios.put(`${API_URL}/api/user/settings/edit`,{
            name: name,
            bio: bio,
            avatar: avatar
        },
        {
            headers: {
                "x-access-token": `${token}` 
                }
                });

        return response.data;
    } catch (e) {
        console.log(e);
    }
}

async function getMyData() {
    const response = await axios.get(`${API_URL}/api/user/me`, {
        headers: {
            "x-access-token": `${token}`
        }
    });
    return response.data;
}


export const useMyData = () => useQuery(["currentUser"], getMyData);



 // refetch when myData changes



    





//export default createPost;
