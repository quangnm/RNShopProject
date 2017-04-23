import React, { Component } from 'react';
import {
    View,
    Image,
    StyleSheet,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from './Home/Home.js';
import Contact from './Contact/Contact.js';
import Cart from './Cart/Cart.js';
import Search from './Search/Search.js';
import Header from './Header.js';

import icHomeSelected from '../../Images/appIcon/home.png';
import icHomeUnSelected from '../../Images/appIcon/home0.png';
import icSearchSelected from '../../Images/appIcon/search.png';
import icSearchUnSelected from '../../Images/appIcon/search0.png';
import icCartSelected from '../../Images/appIcon/cart.png';
import icCartUnSelected from '../../Images/appIcon/cart0.png';
import icContactSelected from '../../Images/appIcon/contact.png';
import icContactUnSelected from '../../Images/appIcon/contact0.png';

export default class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home'
        };
    }

    openMenu() {
        const { open } = this.props;
        open();
    }

    render() {
        const {
            iconStyle,
        } = styles;
        return (
            <View style={{ flex: 1 }}>
                <Header onOpenMenu={this.openMenu.bind(this)} />
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        title="Home"
                        renderIcon={() => <Image source={icHomeUnSelected} style={iconStyle} />}
                        renderSelectedIcon={() => <Image
                            source={icHomeSelected} style={iconStyle}
                        />}
                        onPress={() => this.setState({ selectedTab: 'home' })}
                        selectedTitleStyle={{ color: '#34B089' }}
                    >
                        <Home />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'search'}
                        title="Search"
                        renderIcon={() => <Image source={icSearchUnSelected} style={iconStyle} />}
                        renderSelectedIcon={() => <Image
                            source={icSearchSelected} style={iconStyle}
                        />}
                        onPress={() => this.setState({ selectedTab: 'search' })}
                        selectedTitleStyle={{ color: '#34B089' }}
                    >
                        <Search />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'cart'}
                        title="Cart"
                        renderIcon={() => <Image source={icCartUnSelected} style={iconStyle} />}
                        renderSelectedIcon={() => <Image
                            source={icCartSelected} style={iconStyle}
                        />}
                        badgeText='10'
                        onPress={() => this.setState({ selectedTab: 'cart' })}
                        selectedTitleStyle={{ color: '#34B089' }}
                    >
                        <Cart />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'contact'}
                        title="Contact"
                        renderIcon={() => <Image source={icContactUnSelected} style={iconStyle} />}
                        renderSelectedIcon={() => <Image
                            source={icContactSelected} style={iconStyle}
                        />}
                        onPress={() => this.setState({ selectedTab: 'contact' })}
                        selectedTitleStyle={{ color: '#34B089' }}
                    >
                        <Contact />
                    </TabNavigator.Item>
                </TabNavigator>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    iconStyle: {
        width: 25,
        height: 25,
    },
});
