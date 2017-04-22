import React, { Component } from 'react';
import {
    AppRegistry,
    StatusBar,
    Navigator,
} from 'react-native';

import Authentication from '../components/Authentication/Authentication.js';
import ChangeInfo from '../components/ChangeInfo/ChangeInfo.js';
import Main from '../components/Main/Main.js';
import OrderHistory from '../components/OrderHistory/OrderHistory.js';

StatusBar.setHidden(true);

export default class App extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{ name: 'MAIN' }}
                renderScene={(route, navigator) => {
                    switch (route.name) {
                        case 'MAIN': {
                            return <Main navigator={navigator} />;
                        }
                        case 'AUTHENTICATION': {
                            return <Authentication navigator={navigator} />;
                        }
                        case 'CHANGE_INFO': {
                            return <ChangeInfo navigator={navigator} />;
                        }
                        default: {
                            return <OrderHistory navigator={navigator} />;
                        }
                    }
                }}

                configureScene={(route) => {
                    if (route.name === 'AUTHENTICATION') {
                        return Navigator.SceneConfigs.FloatFromRight;
                    }
                    return Navigator.SceneConfigs.FloatFromLeft;
                }}
            />
        );
    }
}

AppRegistry.registerComponent('RNShopProject', () => App);
