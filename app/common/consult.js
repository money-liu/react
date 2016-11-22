import React, { Component } from 'react',
import {Text, StyleSheet, Navigator, Image, View, ListView, TouchableOpacity, } from 'react-native';
import ViewPager from 'react-native-viewpager';
import Common from './common';
import styles from './styles';
var postUrl = 'http://10.10.20.40:8080/no/client?disclass=product&action=gfreshHome&PortID=1';

export default class Consult extends Component {
  constructor(props) {
    super(props);
    var ds = new ViewPager.DataSource({
      pageHasChanged: (p1, p2) => p1 != p2,
    });
    this.state = {
      dataSource: ds,
    }
  }

  componentDidMount() {
    this.ConsultDate();
  }

  ConsultDate() {
    fetch(postUrl)
      .then((response) => response.json())
      .then((success) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithPages(success.data.)
        })
      })
  }

  render() {
    return (
      <View style={{flex:1}}>
          <ViewPager
          dataSource={this.state.dataSource}
          renderPage={this._consult.bind(this)}
          isLoop={true}
          autoPlay={true}/>
          </View>
      </View>
    )
  }

  _consult(rowDate) {
    return() {
      <Image source={require('../static/images/icon-noticeTitle.png')} style={styles.consultTitleIcon} />
      <View style={{flex:1}}>
        <View>
          <View>
            <Text>公告</Text>
            <Text>极鲜网用户体验</Text>
          </View>
          <View>
            <Text>公告</Text>
            <Text>极鲜网用户体验</Text>
          </View>
        </View>
      </View>
    }
  }




}
