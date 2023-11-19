import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import Loading from "../components/Loading/loading";
import storageService from "../services/storage.service";

interface ContextInterface {
    LoadingData: { [type: string]: Date }
    SaveData: Function,
}

const DefaultContext: ContextInterface = {
    LoadingData: {},
    SaveData: () => { },
}

const LoadingContext = createContext<ContextInterface>(DefaultContext);

interface IProps {
    children?: ReactNode,
}
export const LoadingContextProvider = ({ children }: IProps) => {
    const [loading, setLoading] = useState(true);
    const [LoadingData, SetLoadingData] = useState({});

    // Some data has changed
    const SaveData = (key: string) => {
        const loadData = { ...LoadingData };
        loadData[key] = new Date;
        storageService.StoreData('loading', JSON.stringify(loadData));
        SetLoadingData(loadData);
    }

    // Load data
    const LoadData = async () => {
        let data = await storageService.GetData('loading');
        if (!data) return;
        data = JSON.parse(data);
        SetLoadingData(data);
    }

    // Once loaded, get data
    useEffect(() => {
        LoadData().then(() =>
            setLoading(false)
        );
    }, []);

    const context = {
        LoadingData,
        SaveData,
    }

    if (loading)
        return <Loading />;

    return (
        <LoadingContext.Provider value={context}>
            {children}
        </LoadingContext.Provider>
    );
}

export const useLoadingContext = () => useContext(LoadingContext);