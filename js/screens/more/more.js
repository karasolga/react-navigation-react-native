import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class MoreScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red' }}>
        <Text>More!</Text>
        <Text onPress={() => this.props.navigation.navigate('Profile')}> go to Profile</Text>
      </View>
    );
  }
}
