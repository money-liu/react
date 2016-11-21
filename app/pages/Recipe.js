import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text,Image, ListView, TouchableOpacity, View, InteractionManager, Dimensions, ScrollView, } from 'react-native';
import Common from '../common/common';
import styles from '../common/style';
import Figure from '../common/figure';
import Classify from '../common/classify';
import HeaderView from '../common/HeaderView';
import Icon from 'react-native-vector-icons/FontAwesome';
import RecipeSection from './Data/RecipeSection.json';
import RecipeDetail from '../pages/RecipeDetail1';
import HttpView from '../pages/httpView';

class Class extends Component {
    constructor(props) {
        super(props);
        this._renderRow = this.renderRow.bind(this);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
        };
    }
    _pressButton() {
      // const { navigator } = this.props;
      this.props.navigator.push({
          component: HttpView,
      })
    }
    render() {
        const {Class} = this.props;
        let classList = RecipeSection.section;
        return (
           <View>
              <HeaderView titleView='首页' />
              <ScrollView style={styles.scrllViewHeight}>
              <Figure/>
              <View style={styles.ClassMenu}>
               <TouchableOpacity onPress={this._pressButton.bind(this)}>
                <View style={styles.ClassifyBlock}>
                    <Image source={require('../static/images/icon-auction.png')} style={styles.ClassifyImg} />
                    <Text style={styles.ClassifyText}>极鲜拍</Text>
                 </View>
               </TouchableOpacity>
               <TouchableOpacity onPress={this._pressButton.bind(this)}>
                 <View style={styles.ClassifyBlock} >
                     <Image source={require('../static/images/icon-purchase.png')} style={styles.ClassifyImg}/>
                     <Text style={styles.ClassifyText}>我要购买</Text>
                 </View>
                </TouchableOpacity>
               <TouchableOpacity onPress={this._pressButton.bind(this)}>
                 <View style={styles.ClassifyBlock} >
                     <Image source={require('../static/images/icon-regular.png')} style={styles.ClassifyImg}/>
                     <Text style={styles.ClassifyText}>定期购</Text>
                 </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this._pressButton.bind(this)}>
                 <View style={styles.ClassifyBlock} >
                     <Image source={require('../static/images/icon-vip.png')} style={styles.ClassifyImg}/>
                     <Text style={styles.ClassifyText}>精英会员</Text>
                 </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this._pressButton.bind(this)}>
                 <View style={styles.ClassifyBlock} >
                   <Image source={require('../static/images/icon-logistics.png')} style={styles.ClassifyImg}/>
                   <Text style={styles.ClassifyText}>物流/发票</Text>
                 </View>
                </TouchableOpacity>
              </View>
              <Classify/>
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
                <View style = {styles.container}>
                   <Image style = {styles.image_left} source = {{uri: rowDate.url}} />
                   <View style = {styles.right_view}>
                      <Text style = {styles.title}>{rowDate.name}</Text>
                      <Text style = {styles.prompt_text}>{rowDate.item[0].prompt}</Text>
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
                    rowDate: rowDate,
                }
            })
        });
    }

}

module.exports = Class;
