import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import storageService from "../services/storage.service";
import { Home, User } from "../types";

interface ContextInterface {
    user: User,
    home: Home,
    token?: string,
    setUser: Function,
    setToken: Function,
    setHome: Function,
}

const DefaultContext = {
    user: undefined,
    home: undefined,
    token: undefined,
    setUser: () => { },
    setToken: () => { },
    setHome: () => { },
}

const StateContext = createContext<ContextInterface>(DefaultContext);

interface IProps {
    children?: ReactNode,
}
export const ContextProvider = ({ children }: IProps) => {

    const [user, setUser] = useState(undefined);
    const [home, setHome] = useState(undefined);
    const [token, _setToken] = useState(undefined);

    useEffect(() => {
        new Promise(async (resolve, reject) => {
            const token = await storageService.GetData('access_token');
            resolve(token);
        })
            .then((token: string) => {
                _setToken(token);
            });
    }, []);

    const setToken = (token: string) => {
        _setToken(token);

        if (token)
            storageService.StoreData('access_token', token);
        else
            storageService.RemoveData('access_token');
    }

    const context = {
        user,
        home,
        token,
        setUser,
        setHome,
        setToken,
    }

    return (
        <StateContext.Provider value={context}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);