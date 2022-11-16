import React from "react";
import {Platform, Pressable, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function FloatingWriteButton() {
    return (
        <View style = {styles.wrapper}>
            <Pressable
            style = {({pressed}) => [
                styles.button,
                Platform.OS == 'ios' && {
                    opacity: pressed ? 0.6 : 1,
                },
            ]}
            android_ripple = {{color: 'white'}}>
                <Icon name = "add" size = {24} style = {styles.icon} />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        position:'absolute',
        bottom: 16,
        right: 16,
        width: 56,
        height: 56,
        borderRadius: 28,

        // 안드로이드 전용 그림자 설정
        elevation: 5,

        // 안드로이드에서 물결 효과가 영역 밖으로 나가지 않도록 설정
        overflow: Platform.select({android: 'hidden'}),
    },

    button: {
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundolor: "#009688",
        justifyContent: 'center',
        alignItems: 'center',
    },

    icon: {
        color: 'white',
    },
});

export default FloatingWriteButton;