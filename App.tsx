import React, { Component} from 'react';
import { StyleSheet, Text, View  } from 'react-native';
import { WebView } from 'react-native-webview';

class BasicApiCall extends Component {
  state = {
    content: {} as any
  }
  componentDidMount() {
    fetch('## API URL HERE ##')
    .then(res => res.json())
    .then((data) => {
      this.setState({ content: data })
      console.log(this.state.content)
    })
    .catch(console.log)
  }
}

export default class App extends BasicApiCall {
  render()  {
      return (
        <View style={styles.container}>
          <Text >{this.state.content?.title?.rendered}</Text>
          <WebView
            source={{ html: this.state.content?.content?.rendered}} 
            style={{ width: 200, height: 500  }}
            originWhitelist={['*']}
        />
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
    fontSize: 50
  }
});