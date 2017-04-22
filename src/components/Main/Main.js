import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

export default class Main extends Component {
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
        return (
            <View style={styles.container}>
                <Text>Main</Text>
                <TouchableOpacity
                    onPress={this.gotoAuthentication.bind(this)}
                    style={[styles.buttonContainer, styles.buttonRed]}
                >
                    <Text style={styles.buttonTitle}>Go to Authentication</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this.gotoChangeInfo.bind(this)}
                    style={[styles.buttonContainer, styles.buttonBlue]}
                >
                    <Text style={styles.buttonTitle}>Go to ChangeInfo</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={this.gotoOrderHistory.bind(this)}
                    style={[styles.buttonContainer, styles.buttonGreen]}
                >
                    <Text style={styles.buttonTitle}>Go to OrderHistory</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DFF5C9'
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
});
