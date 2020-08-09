import {
  StatusBar
} from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,Image
} from 'react-native';
import {
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';
import {
  createBottomTabNavigator
} from 'react-navigation-tabs';
import BookTransactionScreen from './screens/BookTransactionScreen';
import SearchScreen from './screens/SearchScreen';
import LoginScreen from './screens/LoginScreen';
console.disableYellowBox = true;

export default class App extends React.Component {
  render() {
    return ( <
      AppContainer / >
    );
  }

}

const TabNavigator = createBottomTabNavigator({
  BookTransaction: {screen: BookTransactionScreen},
  Search: {screen: SearchScreen}
}
  ,{
    defaultNavigationOptions:({navigation})=>({
      tabBarIcon:({})=>
      {
        const routeName=navigation.state.routeName;
        console.log(routeName)
        if(routeName==='BookTransaction')
        {
          return(
          <Image source={require('./book.png')}
          style={{width:40,height:40}}/>
           )
        }
        else if (routeName==='Search')
        {
          return(
            <Image source={require('./searchingbook.png')}
            style={{width:40,height:40}}/>
             )
            }
          }
        })
      }
      );

    const SwitchNavigator = createSwitchNavigator({
      LoginScreen:{screen:LoginScreen},
      TabNavigator:{screen:TabNavigator}
    })


const AppContainer = createAppContainer(SwitchNavigator);

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});