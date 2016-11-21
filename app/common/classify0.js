'use strict';
import React, { Component } from 'react';
import {Text, StyleSheet, Navigator, Image, View, ListView, Alert, TouchableHighlight, InteractionManager, TouchableOpacity, Platform, AsyncStorage } from 'react-native';
import ViewPager from 'react-native-viewpager';
import HttpView from '../pages/httpView';
import styles from './style'

var THUMB_URLS = [
  require('../static/images/like.png'),
  require('../static/images/dislike.png'),
  require('../static/images/call.png'),
  require('../static/images/fist.png'),
  require('../static/images/flowers.png'),
  require('../static/images/heart.png'),
  require('../static/images/liking.png'),
  require('../static/images/party.png'),
];

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
          dataSource2:ds.cloneWithRows(this._genRows({})),
          name:null,
      };
  }
  _renderPage(data, pageID) {
     return (
         <Image source={data} style={styles.page}/>
     );
 }


 render() {
    return (
        <View>
            <View style={styles.ClassMenu}>
             <TouchableOpacity onPress={this.showDetails.bind(this)}>
              <View style={styles.ClassifyBlock}>
                  <Image source={require('../static/images/icon-auction.png')} style={styles.ClassifyImg} />
                  <Text style={styles.ClassifyText}>极鲜拍</Text>
               </View>
                <HttpView navigator={this.props.navigator} />
             </TouchableOpacity>
             <TouchableOpacity onPress={this.rightAction}>
               <View style={styles.ClassifyBlock} >
                   <Image source={require('../static/images/icon-purchase.png')} style={styles.ClassifyImg}/>
                   <Text style={styles.ClassifyText}>我要购买</Text>
               </View>
              </TouchableOpacity>
             <TouchableOpacity onPress={this.rightAction}>
               <View style={styles.ClassifyBlock} >
                   <Image source={require('../static/images/icon-regular.png')} style={styles.ClassifyImg}/>
                   <Text style={styles.ClassifyText}>定期购</Text>
               </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.rightAction}>
               <View style={styles.ClassifyBlock} >
                   <Image source={require('../static/images/icon-vip.png')} style={styles.ClassifyImg}/>
                   <Text style={styles.ClassifyText}>精英会员</Text>
               </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.rightAction}>
               <View style={styles.ClassifyBlock} >
                 <Image source={require('../static/images/icon-logistics.png')} style={styles.ClassifyImg}/>
                 <Text style={styles.ClassifyText}>物流/发票</Text>
               </View>
              </TouchableOpacity>
            </View>
            <ListView
               initialListSize={13*2}
               contentContainerStyle={styles.list}
               dataSource={this.state.dataSource2}
               renderRow={this._renderRow}
             />
        </View>
    );
  }
  showDetails(){
   //let _this=this;
   //  const {navigator} = this.props;
   //   this.props.navigator.push({
   //    name: 'HttpView',
   //    component: HttpView,
   //    passProps: {
   //      id: this.state.id,
   //    }
   //  })
   this.props.navigator.push({
       name: "HttpView",
       component: HttpView,
   });
  }
  _renderRow(rowData,sectionID,rowID)
    {
      var imgSource = THUMB_URLS[rowID];
      return (
        <View style={styles.row}>
          <Image style={styles.thumb} source={imgSource} />
          <Text style={styles.text}>
            {rowData}
          </Text>
        </View>
      );
    }

  _genRows(pressData: {[key: number]:boolean}): Array<string>
    {
      var dataBlob = [];
      for (var ii = 0; ii < THUMB_URLS.length;ii++) {
        dataBlob.push('单元格 ' + ii);
      }
      console.log('第'+ii+'个');
      return dataBlob;
    }

}

module.exports = Classify;
