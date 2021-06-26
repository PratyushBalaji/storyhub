import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ReadStory from '../screens/ReadStory';
import WriteStory from '../screens/WriteStory';



export const AppTabNavigator = createBottomTabNavigator({
  DonateBooks : {
    screen: ReadStory,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/request-list.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Read Stories",
    }
  },
  BookRequest: {
    screen: WriteStory,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/request-book.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Add Stories",
    }
  }
});
