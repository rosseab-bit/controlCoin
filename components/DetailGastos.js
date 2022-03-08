import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const DetailGastos=()=>{
  const seeDetails=()=>{
    console.log('Presionando Transporte')
  }
  return(
    <>
    <View style={styles.container}>
    <View style={styles.detailCard, styles.borderTop}>
      <Text style={styles.titleCard}>
        <Icon name="chevron-circle-right" size={20} color="#000000" /> Salud
      </Text>
    </View>
    <TouchableHighlight onPress={()=>seeDetails()}>
    <View style={styles.detailCard, styles.borderMidle}>

      <Text style={styles.titleCard}>
        <Icon name="chevron-circle-right" size={20} color="#000000" /> Transporte
      </Text>
    </View>
    </TouchableHighlight>
    <View style={styles.detailCard, styles.borderMidle}>
      <Text style={styles.titleCard}>
        <Icon name="chevron-circle-right" size={20} color="#000000" /> Salida
      </Text>
    </View>
    <View style={styles.detailCard, styles.borderMidle}>
      <Text style={styles.titleCard}>
         <Icon name="chevron-circle-right" size={20} color="#000000" /> Panaderia
      </Text>
    </View>
    <View style={styles.detailCard, styles.borderMidle}>
      <Text style={styles.titleCard}>
        <Icon name="chevron-circle-right" size={20} color="#000000" /> Verduleria
      </Text>
    </View>
    <View style={styles.detailCard, styles.borderMidle}>
      <Text style={styles.titleCard}>
        <Icon name="chevron-circle-right" size={20} color="#000000" /> Otros
      </Text>
    </View>
    <View style={styles.detailCard, styles.borderButtom}>
      <Text style={styles.titleCard}>
        <Icon name="chevron-circle-right" size={20} color="#3987c1" /> Otros
      </Text>
    </View>
    </View>
    </>
  );
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    paddingTop:10,
  },
  borderTop:{
    flex:0.3,
    borderWidth: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor:'#D5D5D5',
    padding:20,
    paddingTop:20,
    margin:10,
    marginTop:5,
  },
  borderMidle:{
    flex:1,
    borderWidth: 3,
    backgroundColor:'#D5D5D5',
    padding:20,
    paddingTop:20,
    margin:10,
    marginTop:0,
  },
  borderButtom:{
    borderWidth: 3,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor:'#D5D5D5',
    padding:20,
    paddingTop:20,
    margin:10,
    marginTop:0,
  },
  titleCard:{
    fontSize:20,
  },
  bodyCard:{

  }
});

export default DetailGastos;
