import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Dimensions,
} from 'react-native';

import CustNavigator from '../CustNavigator.js';

const { width } = Dimensions.get('window');
const btnmargin = 30;
const btnRadius = 20;
const btnHeight = 44;
const btnWidth = width - (btnmargin * 2);

export default class Authentication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignIn: true,
        };
    }

    signIn() {
        this.setState({
            isSignIn: true
        });
    }
    signUp() {
        this.setState({
            isSignIn: false
        });
    }

    goBackMain() {
        const navigator = this.props.navigator;
        navigator.pop();
    }

    render() {
        const {
            container,
            inputViewStyle,
            textInputStyle,
            buttonStyle,
            titleButtonStyle,
            buttonViewStyle,
            signInBtnStyle,
            signUpBtnStyle,
            activeStyle,
            inactiveStyle,
        } = styles;

        const signInJSX = (
            <View style={inputViewStyle}>
                <View>
                    <TextInput
                        placeholder="Enter the name"
                        style={textInputStyle}
                    />
                </View>
                <View>
                    <TextInput
                        placeholder="Enter the password"
                        style={textInputStyle}
                        secureTextEntry
                    />
                </View>
                <TouchableOpacity
                    style={buttonStyle}
                >
                    <Text style={titleButtonStyle}>SIGN IN</Text>
                </TouchableOpacity>
            </View>
        );
        const signUpJSX = (
            <View style={inputViewStyle}>
                <View>
                    <TextInput
                        placeholder="Enter the name"
                        style={textInputStyle}
                    />
                </View>
                <View>
                    <TextInput
                        placeholder="Enter the email"
                        style={textInputStyle}
                    />
                </View>
                <View>
                    <TextInput
                        placeholder="Enter the password"
                        style={textInputStyle}
                        secureTextEntry
                    />
                </View>
                <View>
                    <TextInput
                        placeholder="Re Enter the password"
                        style={textInputStyle}
                        secureTextEntry
                    />
                </View>
                <TouchableOpacity
                    style={buttonStyle}
                >
                    <Text style={titleButtonStyle}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
        );

        const { isSignIn } = this.state;
        const mainInputJSX = isSignIn ? signInJSX : signUpJSX;
        const isSignUp = !isSignIn;
        return (
            <View style={container}>
                <CustNavigator goBackMain={this.goBackMain.bind(this)} />
                {mainInputJSX}
                < View style={buttonViewStyle}>
                    <TouchableOpacity
                        style={signInBtnStyle}
                        onPress={this.signIn.bind(this)}
                    >
                        <Text style={isSignIn ? activeStyle : inactiveStyle}>SIGN IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={signUpBtnStyle}
                        onPress={this.signUp.bind(this)}
                    >
                        <Text style={isSignUp ? activeStyle : inactiveStyle}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34B089',
        justifyContent: 'space-between',
    },
    inputViewStyle: {
        alignItems: 'center',
        width,
    },
    textInputStyle: {
        backgroundColor: '#FFFFFF',
        height: btnHeight,
        width: btnWidth,
        padding: 10,
        borderRadius: btnRadius,
        marginTop: 10,
    },
    buttonStyle: {
        height: btnHeight,
        width: btnWidth,
        borderWidth: 1,
        borderColor: '#FFFFFF',
        borderRadius: btnRadius,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    titleButtonStyle: {
        color: '#FFFFFF',
        fontSize: 15
    },
    buttonViewStyle: {
        bottom: 40,
        flexDirection: 'row',
        marginLeft: btnmargin,
        marginRight: btnmargin,
    },
    signInBtnStyle: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        height: btnHeight,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: btnRadius,
        borderBottomLeftRadius: btnRadius,
        marginRight: 1,
    },
    signUpBtnStyle: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        height: btnHeight,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: btnRadius,
        borderBottomRightRadius: btnRadius,
        marginLeft: 1,
    },
    activeStyle: {
        fontSize: 15,
        color: '#34B089'
    },
    inactiveStyle: {
        fontSize: 15,
        color: '#D7D7D7'
    },
});
