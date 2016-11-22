'use strict';
import React, { Component } from 'react';
import {StyleSheet, View, Navigator, Text, Image, TouchableOpacity, ScrollView, ListView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Common from '../common/common';
import styles from '../common/style';
import HeaderView from '../common/HeaderView';
import RecipeSection from './Data/RecipeSection.json';
import RecipeDetail from '../pages/RecipeDetail1';
import ProductDetial from './productDetial';



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
    const {HttpView} = this.props;
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

   renderRow() {
     return (
       <TouchableOpacity
           activeOpacity={0.75}
           onPress={this._onPressFeedItem.bind(this) }
           style={styles.center}
           >
           <View style={styles.container}>
            <View style={styles.ProductCont}>
              <Text style = {styles.productName}>商品名称</Text>
              <Text style = {styles.productBrand}>Dolobster</Text>
              <Text style = {styles.productName}>10~1.5lbs</Text>
              <Text style = {styles.productBrand}>断大脚</Text>
              <Text style = {styles.productPrice}>¥75.5</Text>
              <Text style = {styles.productCart}><Image source={require('../static/images/icon-cartD.png')} style={styles.productIconCart} /></Text>
            </View>
           </View>
          </TouchableOpacity>
     )
   }
   _onPressFeedItem() {
     this.props.navigator.push({
       name: 'ProductDetial',
       component: ProductDetial,
     });
   }

}
