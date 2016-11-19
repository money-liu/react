import React, { Component } from 'react';
import { Natigator, View } from 'react-native';

class st extends Component {
   render() {
     return (
       <Natigator
        initialRoute={{name: '', component: this.props.component, index:0}}
        configureScene={() => {return Navigator.SceneConfigs.PushFromRight}}
        renderScene={(route, navigator) => {
          let Component = route.component;
          return (
            <View style={{flex:1,marginTop:20}}>
               <Component navigator={navigator} route={route} {...route.passProps} />
            </View>
          );
        }}
       />
     );
   }
}

module.export = st;
