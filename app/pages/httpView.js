'use strict';
import React, { Component } from 'react';
import {Text, StyleSheet, Image, View, ListView, TouchableOpacity, Platform, AsyncStorage, Navigator } from 'react-native';

class HttpView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text style={styles.headText}>
            {'第一页'}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={()=>this._navigate('你好! (来源第一页:右出)')}>
          <Text style={styles.buttonText}>
            {'跳转至第二页(右出)'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={()=>this._navigate('你好! (来源第一页:底出)', 'Bottom')}>
          <Text style={styles.buttonText}>
            {'跳转至第二页(底部)'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
module.export = HttpView;
