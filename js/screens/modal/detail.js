import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

export default class ModalDetalScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'yellow' }}>
        <Text style={{ fontSize: 30, color: 'black' }}>Modal detail screen</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.goBack()}
        >
          <Text>go back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}