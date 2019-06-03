import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor: 'green'  }}>
        <Text>Profile!</Text>
        <Text onPress={() => this.props.navigation.goBack()}>Back to more screen</Text>
        <TouchableOpacity
          style={{backgroundColor: 'red', margin: 5, padding: 10}}
          onPress={() => this.props.navigation.navigate('MyModal')}
        ><Text>open modal</Text></TouchableOpacity>
      </View>
    );
  }
}
