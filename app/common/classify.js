'use strict';
import React, { Component } from 'react';
import {Text, StyleSheet, Navigator, Image, View, ListView, Alert, TouchableHighlight, InteractionManager, TouchableOpacity, Platform, AsyncStorage } from 'react-native';
import ViewPager from 'react-native-viewpager';
import HttpView from '../pages/httpView';
import styles from './style';

var postUrl = 'http://10.10.20.40:8080/no/client?disclass=product&action=gfreshHome&PortID=1';
class Classify extends Component {
  constructor(props) {
     super(props);
     // 用于构建DataSource对象
     var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
     // 实际的DataSources存放在state中
     this.state = {
         selectedTab: 'blueTab',
         notifCount: 0,
         presses: 0,
         loaded: false,
         dataSource:ds,
     };
 }
  componentDidMount() {
    this.getDate();
  }
  getDate() {              // 获取数据的方法，并在取得数据之后更新数据源
    fetch(postUrl)
      .then((response) => response.json())
      .then((success) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(success.data.homeAreaList)  //为了设置dataSourece的实际内容， 在constructor 返回 clonewithRows 方法
        })
      })
  }

 render() {
    return (
        <View>
            <ListView                             // 通过渲染返回数据
            contentContainerStyle={styles.list}
            dataSource={this.state.dataSource}
            renderRow={this._renderRow.bind(this)}
            removeClippedSubviews={false}
             />
        </View>
    );
  }
  showDetails(){
   this.props.navigator.push({
       name: "HttpView",
       component: HttpView,
   });
  }
  _renderRow(rowData,sectionID,rowID)
    {
      return (
        <View style={styles.row}>
          <Image style={styles.thumb} source={{uri:rowData.FilePath+rowData.FileName}} />
          <Text style={styles.ClassifyText}>{rowData.HomeAreaName}</Text>
        </View>
      );
    }

}

module.exports = Classify;
