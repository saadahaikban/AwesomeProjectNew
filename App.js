import React, {Component} from 'react';
import {Platform,StyleSheet,Text,View,Navigator} from 'react-native';
//tambah Navigator sebelah view
var First = require('./apps/First'); //pointing the route for button
//const instructions = Platform.select({
//  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//  android:
//    'Double tap R on your keyboard to reload,\n' +
//'Shake or press menu button for dev menu',
//});

//type Props = {};
class App extends Component{
  render(){
    return(
      //<View style={styles.container}>
      //  <Text style={styles.largetext}>Sila Sila Sila</Text>
      //  <Text style={styles.awesometext}>Awesome!</Text>
      //</View>

      //replace with navigator
     <Navigator
      //-> then it accept a couple different properties
      //two which required
        initialRoute ={{ //need initial route and set with id
          id:'First'     //is going to be equal to first to be send to first
          }}              //component

          //to be able the navigator we need render
          renderScene={
            this.navigatorRenderScene
          }
      />
     );
  }

  navigatorRenderScene(route,navigator)
  {
    _navigator = navigator;
    switch(route.id)
      {
        case 'First':
          return(<First navigator={navigator} title="First" />);
      }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  largetext: {
    fontSize: 52,
    fontFamily:"HelveticaNeue-CondensedBold",
    paddingLeft:20,
    paddingRight:20,
    color:"#173e43",
    textAlign: 'center',

  },
  awesometext: {
    fontSize: 52,
    fontFamily:"Georgia",
    fontStyle:"italic",
    textAlign: 'center',
    color: '#3fb0ac',
  }
});
