import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = ({ imgSrc, title, score}) => {
    return (
        <View>
            <Image source={ imgSrc }/>
            <Text>{title}</Text>
            <Text>Image Score - {score}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ImageDetail;