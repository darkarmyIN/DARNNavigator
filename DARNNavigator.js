'use strict';

import React , {Component} from 'react';
import
{
  View,
  Navigator
} from 'react-native';

class DARNNavigator extends React.Component{
  constructor(props) {
  super(props);
  }
  
  render() {
    var initialRouteID = 'stringvalueofid';
    return (
      <Navigator
        style={{flex:1}}
        initialRoute={{id: initialRouteID}}
        renderScene={this.navigatorRenderScene}/>
    );
  }

  navigatorRenderScene(route, navigator) {
    switch (route.id) {
      case 'stringvalueofid':
        return (<YourModule navigator={navigator} route={route} title="YourTitle"/>);
      // Add more ids here
    }
  }
}


module.exports = DARNNavigator;
