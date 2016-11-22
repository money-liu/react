import React, { Component } from 'react';
import {Text,StyleSheet,Image,View } from 'react-native';
import ViewPager from 'react-native-viewpager';
import Common from '../common/common';
import styles from '../common/style';
var postUrl = 'http://10.10.20.40:8080/no/client?disclass=product&action=getProductByAreaOrCategory&AreaID=1&ByPrice=&BySaled=1&CategoryID=&PortID=1';

export default class Featured extends Component {
  /*

key	参数类型	是否必须	参数解释
portId	string	是	港口ID
areaId	string	是	专区分类ID
arriveDate	string	否	到货日期（只能是单个）
specIds	string	否	规格（多个逗号拼接）
sortFlag	int	是	排序字段（ 0：价格低到高，1：价格高到低，2：销量高到低，3：好评由高到低）
  */





constructor(props) {
      super(props);
      // 用于构建DataSource对象
      var ds = new ViewPager.DataSource({
          pageHasChanged: (p1, p2) => p1 !== p2,
      });
      // 实际的DataSources存放在state中
      this.state = {
          dataSource1: ds,
      };
  }

componentDidMount() {
  this.BannerDate();
}

BannerDate() {
  fetch(postUrl)
   .then((response) => response.json())
   .then((success) => {
     this.setState({
       dataSource1: this.state.dataSource1.cloneWithPages(success.data.ProductPNameList)
     })
   })
}

/*
    dataSource: 提供页面数据,
    renderPage: 用于渲染页面视图,
    autoPlay: 为true 将自动播放,
    isLoop: 为true支持循环播放,
    locked: 为true禁止触摸滚动,
    onChangePage: 页面变化的回调,
    renderPageIndicator: 渲染自定义的 ViewPager indicator.
*/

render() {
    return (
    <View style={{flex:1}}>
      <ViewPager
          dataSource={this.state.dataSource1}
          renderPage={this._renderPage.bind(this)
          }
      />
    </View>
    );
  }

  _renderPage(rowData) {
    console.log(rowData.PhonePath+rowData.PhoneImg);
    return (
        <View style={{width:Common.window.width/2,margin:10,}}>
          <Image source={{uri:rowData.PhonePath+rowData.PhoneImg}} style={styles.featuredImg}/>
          <View style={styles.feactedCent}>
            <Text>{rowData.CNProductName}</Text>
            <Text>¥<Text style={styles.FperPrice}>{rowData.PerPrice }</Text>/500g</Text>
          </View>
        </View>
    )
  }

}
