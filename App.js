import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import { CreateAppContainer} from 'react-navigations';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {WriteStoryScreen} from './screens/WriteStoryScreen'
import {ReadStoryScreen} from './screens/ReadStoryScreen'


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      
    </View>
  );
}

const TabNavigator = createBottomTabNavigator({
  WriteStory:{screen:WriteStoryScreen},
  ReadStory :{screen:ReadStoryScreen}
},
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
