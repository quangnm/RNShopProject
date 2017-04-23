import React, { Component } from 'react';
// import {
//     StyleSheet,
// } from 'react-native';

import Drawer from 'react-native-drawer';

import Menu from './Menu.js';
import Shop from './Shop/Shop.js';

export default class Main extends Component {
    closeControlPanel = () => {
        this.drawer.close();
    };
    openControlPanel = () => {
        this.drawer.open();
    };

    render() {
        return (
            <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content={<Menu navigator={this.props.navigator} />}
                openDrawerOffset={0.2}
                panCloseMask={0.2}
                tapToClose
            >
                <Shop open={this.openControlPanel.bind(this)} />
            </Drawer>
        );
    }
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#DFF5C9'
//     },
// });
