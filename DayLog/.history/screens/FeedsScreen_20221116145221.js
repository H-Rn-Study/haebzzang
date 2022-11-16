import React from "react";
import {StyleSheet, View} from 'react-native';
import logContext from "../contexts/LogContext";

function FeedsScreen() {
    return (
    <View style = {styles.block}>
        <logContext.Consumer>
            {(value) => <Text>{value}</Text>}
        </logContext.Consumer>
    </View>
    );
}

const styles = StyleSheet.create({
    block: {},
});

export default FeedsScreen;