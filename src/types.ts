export interface user  {
    login: string;
    id:number; 
    avatar_url:string;
    html_url:string;
    

}
export type details = {
    name:string;
    bio:string;
    blog:string;
    followers:number;
    location:string;
    following:number;
    public_repos:number;
    created_at:string;
    updated_at:string;
}
export interface userData {
    userData: user[] | null;
}
export interface myUser {
    myUser: user;
}
export interface userInfo {
    userInfo: details | null | undefined;
}