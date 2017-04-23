import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
} from 'react-native';
import bannerImage from '../../../Images/temp/banner.jpg';

const { width, height } = Dimensions.get('window');

export default class Collection extends Component {
    render() {
        const {
            container,
            textContainer,
            textStyle,
            imageContainer,
            imageStyle,
        } = styles;
        return (
            <View style={container}>
                <View style={textContainer}>
                    <Text style={textStyle}>
                        SPRING COLLECTION
                    </Text>
                </View>
                <View style={imageContainer}>
                    <Image
                        source={bannerImage}
                        style={imageStyle}
                    />
                </View>
            </View>
        );
    }
}

const imageWidth = width - 40;//padding = 20
const imageHeight = (imageWidth * 465) / 933;

const styles = StyleSheet.create({
    container: {
        height: height * 0.35,
        backgroundColor: '#FFFFFF',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        padding: 10,
        paddingTop: 0,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 5,
    },
    textStyle: {
        fontSize: 20,
        color: '#AEAFAE',
    },
    imageContainer: {
        flex: 5,
        justifyContent: 'flex-end'
    },
    imageStyle: {
        width: imageWidth,
        height: imageHeight,
    }
});
