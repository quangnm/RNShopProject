import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    Image,
    StyleSheet,
    TextInput,
} from 'react-native';

import icMenu from '../../Images/appIcon/ic_menu.png';
import icLogo from '../../Images/appIcon/ic_logo.png';

const { height } = Dimensions.get('window');

export default class Shop extends Component {
    render() {
        const {
            container,
            topContainer,
            titleStyle,
            textInputStyle,
            iconStyle,
        } = styles;

        return (
            <View style={container}>
                <View style={topContainer} >
                    <TouchableOpacity
                        onPress={this.props.onOpenMenu}
                    >
                        <Image source={icMenu} style={iconStyle} />
                    </TouchableOpacity>
                    <Text style={titleStyle}>Dress Shopping</Text>
                    <Image source={icLogo} style={iconStyle} />
                </View>
                <TextInput
                    style={textInputStyle}
                    placeholder='What do you want to buy?'
                />
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: height / 8,
        backgroundColor: '#34B089',
        padding: 10,
        justifyContent: 'space-around'
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textInputStyle: {
        backgroundColor: '#FFFFFF',
        height: height / 22,
        padding: 5,
        marginTop: 10,
    },
    titleStyle: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
    },
    iconStyle: {
        width: 27,
        height: 27,
    }
});
