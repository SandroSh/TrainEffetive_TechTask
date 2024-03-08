export interface user  {
    login: string;
    id:number; 
    avatar_url:string;
    html_url:string;
    

}
export interface userData {
    userData: user[] | null;
}
export interface myUser {
    myUser: user;
}