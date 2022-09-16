import { type } from "os";

export {};

declare global {
    interface Post {
        text: string;
        comments: number,
        retweets: number,
        likes: number,
        date: string,

}
    interface User {
        name: string,
        username: string,
        avatar: string,
        bio: string,
        website: string,
        following: number,
        followers: number,
        joined: string,

}
}
