/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, 
  Image,
  ImageBackground,
} from 'react-native';
import Calendar from 'react-native-calendar';

let remote = require('./private-jet.jpg');

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    const date = new Date();
    return (
      <View style={styles.container}>
        <Image
          style={{ 
            flex: 1,
            width: '100%',
            height: '100%',
            position: 'absolute',
            resizeMode: 'cover',
            justifyContent: 'center',
          }}
          source={remote}
        />
        <View style={styles.colorContain}>
           <View style={styles.calendar}>
              <Calendar
                weekStart={0} 
                showControls={true}
                customStyle={customStyle}
              />
            </View>
          {/*<Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit App.js
          </Text>
          <Text style={styles.instructions}>
            {instructions}
          </Text>*/}
        </View>
      </View>
    );
  }
}

const customStyle = {
  calendarContainer: {
    backgroundColor: 'rgba(248,217,38, 0.5)',
  },
  title: {
    color: '#000000',
    fontSize: 24,
    fontWeight: '700',
  },
  controlButtonText: {
    color: '#000000',
    fontSize: 20,
    fontWeight: '500',
  },
  controlButton: {
   // backgroundColor: 'rgba(255,255,255, 1.0)',
  },
  dayHeading: {
    color: '#000000',
    fontSize: 20,
  },
  weekendHeading: {
    color: '#000000',
    fontSize: 20,
  },
  weekendDayButton: {
    backgroundColor: 'rgba(18,28,38, 0.5)',
  },
  weekendDayText: {
    color: '#000000',
    fontSize: 20,
  },
  day: {
    color: '#000000',
    fontSize: 20,
  },
  dayButton: {
    borderTopWidth: 0,
  },
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  calendar: {
    width: '100%',
  },
  colorContain: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(18,28,38, 0.5)',
    zIndex: 3,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  }
  /*welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },*/
});
