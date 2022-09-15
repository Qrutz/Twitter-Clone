export {};

declare global {
    interface Post {
        text: string;
        comments: number,
        retweets: number,
        likes: number,
        date: string,
}
}