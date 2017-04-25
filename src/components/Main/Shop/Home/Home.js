import React, { Component } from 'react';
import {
    ScrollView,
    StyleSheet,
} from 'react-native';
import Collection from './Collection.js';
import Category from './Category.js';
import TopProduct from './TopProduct';

export default class Home extends Component {
    openMenu() {
        const { open } = this.props;
        open();
    }

    render() {
        const { container } = styles;
        return (
            <ScrollView style={container}>
                <Collection />
                <Category />
                <TopProduct />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DBDBD8'
    },
});
