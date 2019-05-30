import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor: 'green'  }}>
        <Text>Profile!</Text>
        <Text onPress={() => this.props.navigation.goBack()}>Back to more screen</Text>
      </View>
    );
  }
}
