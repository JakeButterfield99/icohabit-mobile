import React from "react";

import { View, Text } from 'react-native';
import { Formik } from 'formik';
import Button from "../components/Button/button";

import { global } from '../styles';
import Loading from "../components/Loading/loading";
import Input from "../components/Input/input";
import authService, { LoginProps } from "../services/auth.service";
import { useStateContext } from "../context/ContextProvider";
import { styles } from "./styles";
import Container from "../components/Container/container";
import { AxiosError } from "axios";

interface IProps {
    navigation: any
}
const Login = (props: IProps) => {

    const { setUser, setToken, setHome } = useStateContext();

    const FormSubmit = (values: any) => {
        const login: LoginProps = {
            email: values.email,
            password: values.password,
        }
        authService.Login(login).then(
            (res) => {
                console.log('logged in!', res.data);

                setUser(res.data.user);
                setHome(res.data.home);
                setToken(res.data.token);
            },
            (err: AxiosError) => {
                console.log('login error', err);
            }
        );
    }

    return (
        <Container>
            <View style={[global.container, global.center]}>
                <Text style={[global.h1, styles.title]}>Login</Text>

                <Formik
                    initialValues={{ activeInput: '', email: '', password: '' }}
                    onSubmit={values => FormSubmit(values)}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, setFieldValue }) => (
                        <View>
                            <Input
                                type="email"
                                label="email"
                                icon="email"
                                value={values.email}
                                placeholder="Email Address"
                                onChangeText={handleChange('email')}
                                activeInput={values.activeInput}
                                setActiveInput={(i: string) => setFieldValue('activeInput', i)}
                            />

                            <Input
                                type="password"
                                label="password"
                                icon="lock"
                                value={values.password}
                                placeholder="Secure Password"
                                onChangeText={handleChange('password')}
                                activeInput={values.activeInput}
                                setActiveInput={(i: string) => setFieldValue('activeInput', i)}
                            />

                            <Button
                                onPress={handleSubmit}
                                text="Submit"
                            />
                        </View>
                    )}
                </Formik>

            </View>
        </Container>
    );
}

export default Login;