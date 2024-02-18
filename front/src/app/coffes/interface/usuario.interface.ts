export interface User {
    token: string;
    user:  UserClass;
}

export interface UserClass {
    name:       string;
    admin:       number;  
    email:      string;
    updated_at: Date;
    created_at: Date;
    id:         number;
}
