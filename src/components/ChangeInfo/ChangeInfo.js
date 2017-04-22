import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

export default class ChangeInfo extends Component {
    goBackMain() {
        const navigator = this.props.navigator;
        navigator.pop();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>ChangeInfo</Text>
                <TouchableOpacity
                    onPress={this.goBackMain.bind(this)}
                    style={styles.buttonContainer}
                >
                    <Text style={styles.buttonTitle}>Go back Main</Text>
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
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonTitle: {
        color: 'white',
        padding: 10,
        fontWeight: 'bold'
    },
});
