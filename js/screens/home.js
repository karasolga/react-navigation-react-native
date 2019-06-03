import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        <TouchableOpacity
          style={{backgroundColor: 'red', margin: 5, padding: 10}}
          onPress={() => this.props.navigation.navigate('MyModal')}
        ><Text>open modal</Text></TouchableOpacity>
      </View>
    );
  }
}

