import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

export default class ModalScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'magenta' }}>
        <TouchableOpacity
          onPress={() => this.props.navigation.pop()}
          style={{position: 'absolute',top: 50, right: 30}}
        >
          <Text>Dismiss</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 30, color: 'black' }}>This is a modal!</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('ModalDetail')}
        >
          <Text>go to detail screen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}