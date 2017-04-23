import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
} from 'react-native';

const { height } = Dimensions.get('window');

export default class Shop extends Component {
    render() {
        return (
            <View style={{ height: height / 8 }}>
                <TouchableOpacity
                    onPress={this.props.onOpenMenu}
                >
                    <Text>Menu</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

