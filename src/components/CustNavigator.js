import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    Image,
    StyleSheet,
} from 'react-native';

import icBack from '../components/Images/appIcon/back_white.png';
import icLogo from '../components/Images/appIcon/ic_logo.png';

const { height } = Dimensions.get('window');

export default class CustNavigator extends Component {
    render() {
        const {
            container,
            topContainer,
            titleStyle,
            iconStyle,
        } = styles;

        return (
            <View style={container}>
                <View style={topContainer} >
                    <TouchableOpacity
                        onPress={this.props.goBackMain}
                    >
                        <Image source={icBack} style={iconStyle} />
                    </TouchableOpacity>
                    <Text style={titleStyle}>Wearing a Dress</Text>
                    <Image source={icLogo} style={iconStyle} />
                </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: height / 12,
        backgroundColor: '#34B089',
        padding: 10,
        justifyContent: 'space-around'
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
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
