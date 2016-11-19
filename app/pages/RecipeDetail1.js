import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    ListView,
    TouchableOpacity,
    View,
    InteractionManager,
    Dimensions,
    TextInput,
} from 'react-native';

import Common from '../common/common';
import HeaderView from '../common/HeaderView';
import Icon from 'react-native-vector-icons/FontAwesome';
import RecipeSection from './Data/RecipeSection.json';
import IngredientsDetail from './IngredientsDetail';
let isLoading = true;

class RecipeDetail extends Component {
    constructor(props) {
        super(props);
        let curText = '';
        this._renderRow = this.renderRow.bind(this);
        this.state = {
          dataSource: new ListView.DataSource({
              rowHasChanged: (row1, row2) => row1 !== row2,
          }),
        };
    }

    render() {
        let classList = this.props.rowDate.item;
        return (
            <View>
                <HeaderView
                    titleView= {this.props.rowDate.name}
                    leftIcon={'angle-left'}
                    leftIconAction={() => this.props.navigator.pop() }
                    />
                {
                    <ListView
                        dataSource={this.state.dataSource.cloneWithRows(classList) }
                        renderRow={this._renderRow}
                        enableEmptySections={true}
                        initialListSize= {10}
                        style={{ height: Common.window.height-45}}//减去导航的高度
                        />
                }
            </View>
        );

    }


    _onEndEditing(text) {
      this.setState((state) => {
        return {
          curText: text,
        };
      });
    }
    _updateText(text) {
      this.setState((state) => {
        return {
          curText: text,
        };
      });
    }

    renderRow(rowDate) {
        // console.log(rowDate);
        return (

            <TouchableOpacity
                activeOpacity={0.75}
                onPress={() =>this._onPressFeedItem(rowDate) }
                style={styles.center}
                >
                <View style = {styles.container}>
                   <Image style = {styles.image_left} source = {{uri: rowDate.url}} />
                   <View style = {styles.right_back_view}>
                      <Text style = {styles.title_text}>{rowDate.name}</Text>
                      <View style = {styles.right_view}>
                        <Text numberOfLines={3} style = {styles.prompt_text}>{rowDate.prompt}</Text>
                        <Icon color="lightgrey" size={30} name='angle-right'/>
                      </View>
                   </View>
                </View>

            </TouchableOpacity>
        );
    }
    _onPressFeedItem(rowDate) {
        InteractionManager.runAfterInteractions(() => {
            this.props.navigator.push({
                name: rowDate.name,
                component: IngredientsDetail,
                passProps: {
                    rowDate: rowDate,
                }
            })
        });
    }
}

const styles = StyleSheet.create({
center:{
   flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
},
container: {
    width: Common.window.width-25,
    marginLeft: 15,
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
},
image_left: {
  height: 60,
  width: 60,
  marginTop: 10,
  marginBottom: 10,
  marginLeft: 0,
  borderRadius: 30,
},
title_text: {
  textAlign: 'left',
  alignSelf: 'flex-start',
  marginLeft: 0,
  paddingTop: 5,
  paddingBottom: 5,
  fontSize: 16,
  color: 'rgb(245, 109, 132)',
  fontWeight: '500',
},
right_view: {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
},
right_back_view: {
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'space-between',
  marginLeft: 10,
},
prompt_text: {
  fontSize: 12,
  width: Common.window.width-120,
  fontWeight: '300',
  color: 'rgb(54, 26, 18)',
},
month_text: {
  fontSize: 12,
  width: Common.window.width-130,
  fontWeight: '200',
  paddingTop: 5,
  paddingBottom: 5,
  justifyContent: 'space-between',
  textAlign: 'right',
  color: 'rgb(54, 26, 18)',
},
top_search_back: {
  flex: 1,
  backgroundColor: 'rgb(194, 188, 195)',
  height: 50,
  width: Common.window.width,
},
top_search_input: {
  backgroundColor: 'white',
  height: 30,
  alignSelf: 'center',
  borderRadius: 5,
  width: Common.window.width-20,
  marginLeft: 10,
  marginRight: 10,
  marginTop: 10,
  fontSize: 14,
},
});
module.exports = RecipeDetail;
