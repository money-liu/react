import React, { Component } from 'react';
import {Text,StyleSheet,Image,View } from 'react-native';
import ViewPager from 'react-native-viewpager';
import Common from './common';
const bannerImages = [
    require('../static/images/banner/1.jpg'),
    require('../static/images/banner/2.jpg'),
    require('../static/images/banner/3.jpg'),
    require('../static/images/banner/4.jpg'),
];

class HelloWorldApp extends Component {

constructor(props) {
      super(props);
      // 用于构建DataSource对象
      var dataSource = new ViewPager.DataSource({
          pageHasChanged: (p1, p2) => p1 !== p2,
      });
      // 实际的DataSources存放在state中
      this.state = {
          dataSource: dataSource.cloneWithPages(bannerImages)
      };
  }
_renderPage(data, pageID) {
     return (
         <Image
             source={data}
             style={styles.page}/>
     );
 }
render() {
    return (
    <View style={{flex:1}}>
    <ViewPager
        dataSource={this.state.dataSource}
        renderPage={this._renderPage}
        isLoop={true}
        autoPlay={true}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        height:220,
        width: Common.window.width,
        resizeMode: 'stretch'
    }
})
module.exports = HelloWorldApp;
