import React from "react";
import { Text, View } from "react-native";

import { global } from "../../styles";

const Loading = () => {
    return (
        <View style={[global.container, global.center]}>
            <Text>Loading...</Text>
        </View>
    )
}
export default Loading;