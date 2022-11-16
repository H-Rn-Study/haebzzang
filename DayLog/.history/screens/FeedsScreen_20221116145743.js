import React from "react";
import {StyleSheet, View, Text} from 'react-native';
import LogContext from "../contexts/LogContext";

function FeedsScreen() {
    return (
    <View style = {styles.block}>
        <Box>
            <Text>1</Text>
        </Box>
        <Box>
            <Text>2</Text>
        </Box>
        <Box>
            <Text>3</Text>
        </Box>
    </View>
    );
}

function Box({children}) {
    return <View style = {styles.box}>{children}</View>;
}

const styles = StyleSheet.create({
    box: {
        borderWidth: 2,
        padding: 16,
        borderBottomColor: 'black',
        marginBottom: 16,
    },
});

export default FeedsScreen;