/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, 
  StyleSheet,
   Text, 
   View, 
   StatusBar,
   TextInput , 
   Dimensions
  }
    from 'react-native';

const {height, width} = new Dimensions.get('window');


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle = "light-content" />
        <Text style={styles.title}>Today Todo!</Text>
        <View style = {styles.card}>
          <TextInput style ={styles.input} placeholder={"New To Do "}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F23657',
  },
  title: {
     color:'white',
     fontSize:40,
     fontWeight:"200",
     marginTop:50,
     marginBottom : 25
  },
  card : {
    backgroundColor:'white',
    flex:1,
    width : width -25,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    ...Platform.select(
      {
        ios :{
            shadowColor:"rgb(50,50,50)",
            shadowOpacity: 0.5,
            shadowRadius:3,
            shadowOffset:{
              height:-1,
              width:0
            }
            },
        android:{
          elavation :3  
        }
      }
    )
  },

});
