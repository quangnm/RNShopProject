import React, { Component } from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import Collection from './Collection.js';
import Category from './Category.js';

export default class Home extends Component {
    openMenu() {
        const { open } = this.props;
        open();
    }

    render() {
        const { container } = styles;
        return (
            <View style={container}>
                <Collection />
                <Category />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DBDBD8'
    },
});
