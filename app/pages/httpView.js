'use strict';
import React, { Component } from 'react';
import {StyleSheet, View, Navigator, Text, Image, TouchableOpacity, ScrollView, ListView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Common from '../common/common';
import styles from '../common/style';
import HeaderView from '../common/HeaderView';
import RecipeSection from './Data/RecipeSection.json';
import RecipeDetail from '../pages/RecipeDetail1';

export default class HttpView extends Component {
  constructor(props) {
      super(props);
      this._renderRow = this.renderRow.bind(this);
      this.state = {
          dataSource: new ListView.DataSource({
              rowHasChanged: (row1, row2) => row1 !== row2,
          }),
      };
  }

  render() {
    const {Class} = this.props;
    let classList = RecipeSection.section;
      return (
          <View>
            <HeaderView
             titleView={'列表页面'}
             leftIcon={'angle-left'}
             leftIconAction={() => this.props.navigator.pop()}
            />
            <ScrollView style={styles.scrllViewHeight}>
            <View>
             <ListView
               dataSource={this.state.dataSource.cloneWithRows(classList) }
               renderRow={this._renderRow}
               enableEmptySections={true}
               initialListSize= {10}
               />
            </View>
            </ScrollView>
          </View>
      );
   }

   renderRow(rowDate) {
     return (
       <TouchableOpacity
           activeOpacity={0.75}
           onPress={() =>this._onPressFeedItem(rowDate) }
           style={styles.center}
           >
           <View style={styles.container}>
            <Image style={styles.image_left} source={require('../static/images/product/productImg.png')} />
            <View style={styles.right_view}>
              <Text style = {styles.title}>商品名称</Text>
              <Text style = {styles.prompt_text}>商品介绍</Text>
             </View>
           </View>
      </TouchableOpacity>
     )
   }

}
