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
  text: {
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

};
