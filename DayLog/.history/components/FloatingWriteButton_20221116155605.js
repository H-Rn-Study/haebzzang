import React from 'react';
import { Platform, Pressable, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function FloatingWriteButton() {
    return (
        <View style = {StyleSheet.wrapper}>
            <Pressable
            style = {({pressed}) => [
                styles.button,
                Platform.OS === 'ios' && {
                    opacity: pressed ? 0.6 : 1,
                },
            ]}
            android_ripple = {{color : 'white'}} >
                <Icon namename = "add" size = {24} style = {styles.icon} />
            </Pressable>
        </View>
    );
}