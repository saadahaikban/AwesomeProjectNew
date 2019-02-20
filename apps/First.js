import React,{Component} from 'react';
import {View,StyleSheet} from 'react-native';

class First extends Component{
  render(){
    return (
      <View style={styles.container}>//add something to display on android

      </View>
    )
  }
}

const styles = StyleSheet.create({
//in each styles have flex:1 ..so it will split space evenly

  container:{
    flex: 1,//contain the entire screen == 1:1 ratio
    justifyContent :'center',
    alignItems:'center', //help controlling horizontal and vertical centering of content
    backgroundColor:'#dddfd4'
  },
  largetext:{
    flex:1,
    fontSize:52,
    fontFamily:'HelveticaNeue-CondensedBold',
    paddingTop: 40,
    paddingRight:20,
    paddingLeft:20,
    color:'#173e43'
  },
  button:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'stretch',
    backgroundColor:'#3fb0ac'
  },
  buttontext:{
    fontFamily:'HelveticaNeue-CondensedBold',
    color:'#fae596'
  }

})

module.exports = First;

//1.fully styled Component
//2. figure out how do get this component to render on the screen & link up
//touchable TouchableHighlight (say it dont nothing but then yes)
//(in app.js)
