import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
} from 'react-native';
import sp1 from '../../../Images/temp/sp1.jpeg';
import sp2 from '../../../Images/temp/sp2.jpeg';
import sp3 from '../../../Images/temp/sp3.jpeg';
import sp4 from '../../../Images/temp/sp4.jpeg';

const { width } = Dimensions.get('window');
const productWidth = (width - 50) / 2;
const productHeight = (productWidth * 452) / 361;

export default class TopProduct extends Component {
    render() {
        const {
            container,
            titleContainer,
            bodyContainer,
            title,
            productContainer,
            imageStyle,
            productName,
            productPrice,
        } = styles;

        return (
            <View style={container}>
                <View style={titleContainer}>
                    <Text style={title}>TOP PRODUCT</Text>
                </View>
                <View style={bodyContainer}>
                    <View style={productContainer}>
                        <Image source={sp1} style={imageStyle} />
                        <Text style={productName}>Italy Dress</Text>
                        <Text style={productPrice}>350$</Text>
                    </View>
                    <View style={productContainer}>
                        <Image source={sp2} style={imageStyle} />
                        <Text style={productName}>Triump</Text>
                        <Text style={productPrice}>100$</Text>
                    </View>
                    <View style={productContainer}>
                        <Image source={sp3} style={imageStyle} />
                        <Text style={productName}>Spainese</Text>
                        <Text style={productPrice}>500$</Text>
                    </View>
                    <View style={productContainer}>
                        <Image source={sp4} style={imageStyle} />
                        <Text style={productName}>NEM</Text>
                        <Text style={productPrice}>200$</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        justifyContent: 'center',
    },
    titleContainer: {
        height: 50,
        justifyContent: 'center',
        paddingLeft: 10,
    },
    title: {
        color: '#D3D3CF',
        fontSize: 18
    },
    bodyContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        paddingBottom: 10,
    },
    productContainer: {
        width: productWidth,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        height: productHeight + 50,
        marginTop: 10,
    },
    imageStyle: {
        width: productWidth,
        height: productHeight,
    },
    productName: {
        color: '#D3D3CF',
        fontSize: 13,
        paddingLeft: 10,
        fontWeight: '500',
        marginVertical: 5,
    },
    productPrice: {
        fontSize: 13,
        color: 'pink',
        paddingLeft: 10,
        marginBottom: 5,
    }
});
