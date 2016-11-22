import Common from './common';

module.exports = {
  center:{
     flexDirection: 'row',
     justifyContent: 'center',
     alignItems: 'center',
  },
  container: {
      width: Common.window.width,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'white',
      borderBottomColor: '#ccc',
      borderBottomWidth: 1,
      padding:10,
  },
  image_left: {
    height: 60,
    width: 60,
  },
  Titlehand: {
      fontSize:15,
      color:'#000',
  },
  title: {
    textAlign: 'left',
    fontSize: 14,
    width:Common.window.width-85,
  },
  prompt_text: {
   color: '#3987ff',
   fontSize: 12,
   width:Common.window.width-85,
  },
  right_view: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginLeft: 10,
  },
  scrllViewHeight: {
    height:Common.window.height -110,
  },
  // 分类
  page: {
     flex: 1,
     resizeMode: 'stretch'
  },
  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  row: {
    justifyContent: 'center',//'center'
    padding: 5,
    margin:6,
    width: 85,
    height: 85,
    alignItems: 'center',
  },
  thumb: {
    width: 45,
    height: 45
  },
  ClassifyText: {
    flex: 1,
    marginTop: 5,
    fontSize:12,
  },
ClassMenu: {
  justifyContent: 'center',
  flexDirection: 'row',
  flexWrap: 'wrap',
  height: 80,
  marginLeft:20,
  marginTop:10,
  marginBottom: 10,
  alignItems: 'center',
},
ClassifyImg: {
  width:50,
  height:50,
},
ClassifyBlock: {
  width:75,
  height:80,
  flex:1,
},
ClassifyText: {
  fontSize: 12,
},
ProductCont: {
  width: Common.window.width,
  flex:1,
  flexWrap:'wrap',
  flexDirection:'row',
  paddingTop:5,
},
productName: {
  flex:1,
  fontSize:12,
  color:'#333',
},
productBrand: {
  flex:1,
  color:'#666',
  fontSize: 12,
},
productPrice: {
  fontSize:16,
  color: '#000',
  flex:1,
},
productCart: {
  flex:1,
},
productIconCart: {
  width:18,
  height:18,
  justifyContent:'center',
  alignItems:'center',
},
// 商品详情

ProductDetialHeight: {
  height: Common.window.height - 100,
  width: Common.window.width,
  backgroundColor: '#fff',
  marginTop:100,
},
ProductFix: {
  flex:1,
  padding: 15,
},
ProductTitle: {
  flex:1,
  fontSize: 12,
  color: '#333',
},

// 机鲜公告
consultTitleIcon: {
  width:50,
  height:53,
},

// 轮播图
page: {
    flex: 1,
    height:220,
    width: Common.window.width,
    resizeMode: 'stretch'
},

// 特别推荐
FeaturedBlock: {
 flex:1,
 padding:15,
 backgroundColor:'#fff',
 marginBottom: 10,
},
FeaturedFlex: {
  flex:1,
  flexDirection:'row',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 10,
},
FeaturedIcon: {
  width:105,
  height:20,
},
FeaturedIcon1: {
  width:130,
  height:20,
},
FeaturedTitle: {
  width: 60,
  height: 20,
  marginRight: 5,
},
FperPrice: {
  color: '#3987ff',
  fontSize: 16,
  marginLeft:5,
  marginRight:5,
},
featuredImg: {
  flex:1,
  height: 150,
},
feactedCent: {
  margin:10,
},
wrapper: {
  },

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },

  image: {
    flex: 1
  }



};
