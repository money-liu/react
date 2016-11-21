'use strict';
import React, { Component } from 'react';
import { StyleSheet, Text,Image, ListView, Navigator,  TouchableOpacity, View, InteractionManager, Dimensions, ScrollView, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Common from '../common/common';
import HeaderView from '../common/HeaderView';
import RecipeSection from './Data/RecipeSection.json';
import RecipeDetail from './RecipeDetail1';

export default class HttpView extends Component {
  constructor(props){
    super(props);
    this._renderRow = this.renderRow.bind(this);
    this.state = {
      dataSource = new ListView.DataSource({
        rowHasChangeed: (row1, row2) => row1 != row2,
      }),
    }
  }
  BackComponent() {
    this.props.navigator.pop();
  }
  render() {
      const {HttpView} = this.props;
      let classList = RecipeSection.section;
      return (
          <View>
            <HeaderView titleView={'列表页面'} />
            <ScrollView>
              <TouchableOpacity onPress={this.BackComponent.bind(this)}>
                <Text>页面跳转到上一页</Text>
              </TouchableOpacity>
              <View>
                 <ListView
                  dataSource={this.state.dataSource.cloneWithRows(classList)}   // 数据源
                  renderRow={this._renderRow}    //从数据源里接受一条数据
                  enableEmptySections={true}     //
                  initialListSize={10}           // 指定在组件中刚挂载渲染多少数据
                 />
              </View>
            </ScrollView>
          </View>
      );
  }
  _renderRow(rowDate) {
    return (
      <TouchableOpacity
       activeOpacity={0.75}
       onPress={() => this._onPressFeedItem(rowDate)
       style={styles.center}
       }
      >
      <View style={styles.container}>
         <Image style={styles.image_left} source={{uri: rowDate.url}}>
         <View style={styles.right_view}>
           <Text style={style.title}>{rowDate.name}</Text>
           <Text style={styles.prompt_text}>{rowDate.item[0].prompt}</Text>
         </View>
      </View>
      </TouchableOpacity>
    )
  }

  _onPressFeedItem(rowDate) {
    InteractionManager.runAfterInteractions(() => {                       //安排一个任务在交互和动画完成之后执行
      this.props.navigator.push({
        component: RecipeDetail,
        passProps: {
          rowDate: rowDate,
        }
      })
    })
  }


}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 25,
    marginLeft: 20,
    marginRight: 20,
  },
  image_middle: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    width: Common.window.width-40,
    height: Common.window.width-40,
  },
  content: {
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
  },

  webview: {
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    width: Common.window.width-40,
    height: Common.window.width-40,
  },
});

module.exports = HttpView;
