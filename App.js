import React, { Component } from 'React';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';


export default class ProjetoRn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      flatData:[
        {key:'1', nome:'Bruno Santos', cidade:'Santo André', estado:'São Paulo', foto:(require('./images/bruno.jpg'))},
        {key:'2', nome:'Adriano Sousa', cidade:'Santo André', estado:'São Paulo', foto:(require('./images/Adriano.jpg'))},
        {key:'3', nome:'Matheus Almeida', cidade:'Mauá', estado:'São Paulo', foto:(require('./images/Matheus.jpg'))},
        {key:'4', nome:'Eric Cavalcante', cidade:'Mauá', estado:'São Paulo', foto:(require('./images/Eric.jpg'))},
        {key:'5', nome:'Talita Angel', cidade:'São Paulo', estado:'São Paulo', foto:(require('./images/talita.jpg'))}
      ]
    };
  }

  flatRender(item) {
    return (
        <View style={styles.flatItem}>
          <Image style={styles.foto} source={item.foto} /> 
          <View style={styles.fletArea}>
            <Text style={styles.flatNome}>{item.nome}</Text>
            <Text style={styles.flatInfo}>{item.cidade} - {item.estado}</Text>
          </View>
        </View>
    );
  }

  render() {
    return(
        <View style={styles.body}>
            <FlatList data={this.state.flatData} renderItem={({item}) => this.flatRender(item)}/>
        </View>

      );
  }
}

const styles = StyleSheet.create({
  body:{
    paddingTop:20,
    flex:1,
    backgroundColor:'#000000'
  },
  flatItem:{
    padding:10,
    borderWidth:1,
    borderColor:'#FFFFFF',
    height:100
  },
  fletArea:{
    marginTop:-18
  },
  flatNome:{
    fontSize:30,
    color:'#FFFFFF',
    marginLeft:90
  },
  flatInfo:{
    fontSize:20,
    color:'#FFFFFF',
    marginLeft:90
  },
  foto:{
    height:80,
    width:80,
    marginBottom:-60
  }

});