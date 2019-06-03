import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

export default class ModalScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'magenta' }}>
        <Text style={{ fontSize: 30, color: 'black' }}>This is a modal!</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.goBack()}
        >
          <Text>Dismiss</Text>
        </TouchableOpacity>
      </View>
    );
  }
}