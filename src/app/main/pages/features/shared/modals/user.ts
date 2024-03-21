export interface UserProfile {
    id: string ;
    email: string;
    name: string;
    user_id: string;
    uuid:string;
    role_name: string;
    family_name: string;
    given_name: string;
    sub: string;
}

export interface SignUpParameters{
    username: string;
    password: string;
    email: string;
    phone_number: string;
    given_name: string;
    family_name: string;
    gender: string;
    role: string;
    address: string;
}