import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import RecipesContainers from '../containers/RecipesContainers1';
import AnswersContainers from '../containers/AnswersContainers1';
import MoreContainer from '../containers/MoreContainer1';
import CollectContainer from '../containers/CollectContainer1';

const tabBarItems = [
    { title: '首页', icon: () => <Image style={{ width: 15, height: 15 }} source={require('../static/images/icon-home.png')}/>, component: RecipesContainers },
    { title: '客服', icon: () => <Image style={{ width: 15, height: 15 }} source={require('../static/images/icon-service.png')}/>, component: AnswersContainers },
    { title: '购物车', icon: () => <Image style={{ width: 15, height: 15 }} source={require('../static/images/icon-cart.png')}/>, component: CollectContainer },
    { title: '我的', icon: () => <Image style={{ width: 15, height: 15 }} source={require('../static/images/icon-personal.png')}/>, component: MoreContainer },
]

export default class TarBarView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: tabBarItems[0].title,
        };
    }
    render() {
        return (
            <TabNavigator tabBarStyle={{ height: 40 }}>
                {
                    tabBarItems.map((controller, i) => {
                        let Component = controller.component;
                        return (
                            <TabNavigator.Item
                                key= {i}
                                selected={this.state.selectedTab === controller.title}
                                title={controller.title}
                                renderIcon={controller.icon}
                                onPress={() => this.setState({ selectedTab: controller.title }) }>
                                <Component navigator = {this.props.navigator} {...this.props}/>
                            </TabNavigator.Item>
                        )
                    })
                }
            </TabNavigator >

        );
    }


}
