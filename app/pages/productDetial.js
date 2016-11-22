import React, { Component } from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, ListView } from 'react-native';
import Common from '../common/common';
import styles from '../common/style';

export default class ProductDetial extends Component {
   render() {
     return (
        <View style={styles.ProductDetialHeight}>
          <View style={styles.ProductFix}>
            <View style={styles.ProductTitle}>
               <Text>Dolobster-迪奥 美国 野生 螯龙虾 断小脚 7.20 1-1.5lbs 33.0磅/泡沫箱</Text>
            </View>
          </View>
          <ScrollView>
            <View>
              <Text>111</Text>
            </View>
          </ScrollView>
        </View>
     )
   }
 }
