import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text,Image, ListView, TouchableOpacity, View, InteractionManager, Dimensions, ScrollView, } from 'react-native';
import Common from '../common/common';
import styles from '../common/style';
import HeaderView from '../common/HeaderView';
import Figure from '../common/figure';
import Classify from '../common/classify';
import Icon from 'react-native-vector-icons/FontAwesome';
import RecipeSection from './Data/RecipeSection.json';
import RecipeDetail from '../pages/RecipeDetail1';

class Class extends Component {
	constructor(props) {
		super(props);
		this._renderRow = this.renderRow.bind(this);
		this.state = {
			dataSource: new ListView.DataSource({
				rowHasChangeed: (row1,row2) => row1 !== row2,
			}),
		};
	}

	render() {
		const {Class} = this.props;
		let classList = RecipeSection.section;
		return (
          <View>
            <HeaderView titleView='首页' />
            <ScrollView style={styles.scrllViewHeight}>
            <Figure/>
            <Classify/>
            <View>
              <ListView
                 dataSource = {this.state.dataSource.cloneWithRows(classList)}
                 renderRow = {this._renderRow}
                 endableEmptySections = {true}
                 initialListSize = {10}
              />
            </View>
          </View>
		);
	}

	renderRow(rowDate) {
		return (
          <TouchableOpacity
            activeOpacity={0.75}
            onPress={ () => this._onPressFeedItem(rowDate) }
            styles = {styles.center}
          >
          <View style= {styles.container}>
             <Image style={styles.image_left} source = {{uri: rowDate.url}} />
             <View style={styles.right_view}>
                 <Text style={styles.title}>{rowDate.name}</Text>
                 <Text style={styles.prompt_text}>{rowDate.item[0].prompt}</Text>
             </View>
          </View>
          </TouchableOpacity>
		);
	}

	_onPressFeedItem(rowDate) {
		InteractionManager.runAfterInteractions(() => {
			this.props.navigator.push({
				name: rowDate.name,
				component: RecipeDetail,
				passProps: {
					rowDate: rowDate
				}
			})
		})
	}

	configureScene(route) {
	  return Navigator.SceneConfigs.PushFromRight;
	}

}

module.extends = Class;
