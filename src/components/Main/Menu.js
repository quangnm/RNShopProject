import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native';

import profileImage from '../Images/temp/profile.png';

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogedIn: false,
        };
    }

    gotoAuthentication() {
        const navigator = this.props.navigator;
        navigator.push({ name: 'AUTHENTICATION' });
    }

    gotoChangeInfo() {
        const navigator = this.props.navigator;
        navigator.push({ name: 'CHANGE_INFO' });
    }

    gotoOrderHistory() {
        const navigator = this.props.navigator;
        navigator.push({ name: 'ORDER_HISTORY' });
    }

    render() {
        const {
            container,
            // buttonContainer,
            // buttonTitle,
            // buttonBlue,
            // buttonGreen,
            // buttonRed,
            profileImageContainer,
            buttonStyle,
            buttonSignInStyle,
            buttonSignOutStyle,
            titleButtonStyle,
            userNameStyle,
            userNameContainer,
        } = styles;

        //Co the: sau nay se chuyen thanh 1 component rieng
        const logoutJSX = (
            <View style={{ flex: 1 }}>
                <TouchableOpacity
                    style={[buttonStyle, buttonSignInStyle]}
                    onPress={this.gotoAuthentication.bind(this)}
                >
                    <Text style={titleButtonStyle}>Sign In</Text>
                </TouchableOpacity>
            </View>
        );

        const loginJSX = (
            <View style={{ flex: 1 }}>
                <View style={userNameContainer}>
                    <Text style={userNameStyle}>User name</Text>
                </View>
                <TouchableOpacity
                    style={[buttonStyle, buttonSignOutStyle]}
                    onPress={this.gotoOrderHistory.bind(this)}
                >
                    <Text style={titleButtonStyle}>Order History</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[buttonStyle, buttonSignOutStyle]}
                    onPress={this.gotoChangeInfo.bind(this)}
                >
                    <Text style={titleButtonStyle}>Change Info</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[buttonStyle, buttonSignOutStyle]}>
                    <Text style={titleButtonStyle}>Log out</Text>
                </TouchableOpacity>
            </View>
        );

        const mainJSX = this.state.isLogedIn ? loginJSX : logoutJSX;

        return (
            <View style={container}>
                <Image
                    source={profileImage}
                    style={profileImageContainer}
                />
                {mainJSX}
            </View>
        );
    }
}
/*
<TouchableOpacity
    style={[buttonContainer, buttonRed]}
    onPress={this.gotoAuthentication.bind(this)}
>
    <Text style={buttonTitle}>Go to Authentication</Text>
</TouchableOpacity>
<TouchableOpacity
    style={[buttonContainer, buttonBlue]}
    onPress={this.gotoChangeInfo.bind(this)}
>
    <Text style={buttonTitle}>Go to ChangeInfo</Text>
</TouchableOpacity>
<TouchableOpacity
    style={[buttonContainer, buttonGreen]}
    onPress={this.gotoOrderHistory.bind(this)}
>
    <Text style={buttonTitle}>Go to OrderHistory</Text>
</TouchableOpacity>
*/

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#34B089',
        borderRightWidth: 3,
        borderRightColor: '#FFFFFF',
    },
    buttonContainer: {
        width: 200,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        margin: 10,
    },
    buttonBlue: {
        backgroundColor: 'blue',
    },
    buttonRed: {
        backgroundColor: 'red',
    },
    buttonGreen: {
        backgroundColor: 'green',
    },
    buttonTitle: {
        color: 'white',
        padding: 10,
        fontWeight: 'bold'
    },
    profileImageContainer: {
        width: 140,
        height: 140,
        borderRadius: 70,
        marginBottom: 30,
        marginTop: 10,
    },
    buttonStyle: {
        height: 44,
        borderRadius: 5,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        marginBottom: 10
    },
    buttonSignInStyle: {
        alignItems: 'center',
        paddingHorizontal: 90,
    },
    buttonSignOutStyle: {
        paddingHorizontal: 130,
        paddingLeft: 10,
    },
    titleButtonStyle: {
        color: '#34B089',
        fontSize: 15,
    },
    userNameStyle: {
        color: '#ffffff',
        marginBottom: 20,
        fontSize: 20,
        fontWeight: '600'
    },
    userNameContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});
