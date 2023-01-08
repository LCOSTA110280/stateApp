import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      nome: ''
    }
    this.entrar = this.entrar.bind(this);
  }

  entrar(nome){
    this.setState({
      nome: nome
    })
  }

  render(){  
  return (
    <View style={{marginTop:100}}>
      <Button title='Entrar' onPress={()=> this.entrar('Leonardo Costa React')}>
      </Button>
      <Text style={{fontSize:30, color: 'blue', textAlign:'center'}}>
        {this.state.nome}
      </Text>
    </View>
  );
}
}


export default App;

