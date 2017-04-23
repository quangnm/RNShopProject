import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
} from 'react-native';
import Swiper from 'react-native-swiper';
import littleImage from '../../../Images/temp/little.jpg';
import maxiImage from '../../../Images/temp/maxi.jpg';
import midiImage from '../../../Images/temp/mini.jpg';
import partyImage from '../../../Images/temp/party.jpg';

const { width, height } = Dimensions.get('window');
const imageWidth = width - 40;//padding = 20
const imageHeight = (imageWidth * 400) / 800;

export default class Category extends Component {
    render() {
        const {
            container,
            textContainer,
            textStyle,
            imageContainer,
            imageStyle,
            categoryTittleStyle
        } = styles;
        return (
            <View style={container}>
                <View style={textContainer}>
                    <Text style={textStyle}>
                        LIST OF CATEGORY
                    </Text>
                </View>
                <View style={imageContainer}>
                    <Swiper
                        width={imageWidth}
                        height={imageHeight}
                    >
                        <Image source={littleImage} style={imageStyle}>
                            <Text style={categoryTittleStyle}>Little Dress</Text>
                        </Image>
                        <Image source={maxiImage} style={imageStyle}>
                            <Text style={categoryTittleStyle}>Maxi Dress</Text>
                        </Image>
                        <Image source={midiImage} style={imageStyle} >
                            <Text style={categoryTittleStyle}>Midi Dress</Text>
                        </Image>
                        <Image source={partyImage} style={imageStyle}>
                            <Text style={categoryTittleStyle}>Party Dress</Text>
                        </Image>
                    </Swiper>
                </View>
            </View >
        );
    }
}

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
        justifyContent: 'center',
        alignItems: 'center'
    },
    categoryTittleStyle: {
        fontSize: 18,
        marginTop: 50,
    }
});
