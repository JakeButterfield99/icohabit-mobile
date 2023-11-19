import React from "react";

import { View, Text, TextInput } from 'react-native';
import { Formik } from 'formik';
import Button from "../components/Button/button";

import { global } from '../styles';
import Loading from "../components/Loading/loading";
import Input from "../components/Input/input";
import { styles } from "./styles";
import Container from "../components/Container/container";
import authService, { RegisterProps } from "../services/auth.service";
import { useStateContext } from "../context/ContextProvider";
import { AxiosError } from "axios";

interface IProps {
    navigation: any
}
const Register = (props: IProps) => {

    const { setUser, setToken, setHome } = useStateContext();

    const FormSubmit = (values: any) => {
        const signup: RegisterProps = {
            email: values.email,
            password: values.password,
            password_confirmation: values.passwordConfirmation,
        }

        authService.Register(signup).then(
            (res) => {
                setUser(res.data.user);
                setToken(res.data.token);
            },
            (err: AxiosError) => {
                console.log('register error', err.request);
            }
        );
    }

    return (
        <Container>
            <View style={[global.container, global.center]}>
                <Text style={[global.h1, styles.title]}>Register</Text>

                <Formik
                    initialValues={{ activeInput: '', email: '', password: '', passwordConfirmation: '' }}
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
                                placeholder="Password Here"
                                onChangeText={handleChange('password')}
                                activeInput={values.activeInput}
                                setActiveInput={(i: string) => setFieldValue('activeInput', i)}
                            />

                            <Input
                                type="passwordConfirmation"
                                label="confirm password"
                                icon="lock"
                                value={values.passwordConfirmation}
                                placeholder="Confirm Password Here"
                                onChangeText={handleChange('passwordConfirmation')}
                                activeInput={values.activeInput}
                                setActiveInput={(i: string) => setFieldValue('activeInput', i)}
                            />

                            <Button
                                style={{ marginTop: 10 }}
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

export default Register;