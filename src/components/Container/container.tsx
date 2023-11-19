import React, { ReactNode } from "react";
import { SafeAreaView } from "react-native";

interface IProps {
    children?: ReactNode,
}

const Container = (props: IProps) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            {props.children}
        </SafeAreaView>
    )
}

export default Container;