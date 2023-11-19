import authAxios, { newAxios } from "../axios";

/*
    Props
*/

export interface LoginProps {
    email: String,
    password: String,
}

export interface RegisterProps {
    email: string,
    password: string,
    password_confirmation: string,
}

/*
    Functions
*/

const GetUser = () => {
    return authAxios.get('user');
}

const GetHome = () => {
    return authAxios.get('home');
}

const Login = (props: LoginProps) => {
    return newAxios.post('login', {
        email: props.email,
        password: props.password,
    });
}

const Register = (props: RegisterProps) => {
    return newAxios.post('register', {
        email: props.email,
        password: props.password,
        password_confirmation: props.password_confirmation,
    });
}

export default {
    GetUser,
    GetHome,
    Login,
    Register,
}