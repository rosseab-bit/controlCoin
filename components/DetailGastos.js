import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Accordion from './Accordion';
import DataCoin from './DataCoin';
const DetailGastos=({dataCoin, setDataCoin})=>{
  const [seeAccordion, setSeeAccordion]=useState(false);

  const seeDetails=()=>{
    console.log('Presionando Transporte')
  }
  //console.log('datos de datacoin')
  //console.log(dataCoin.dataChart)
  //dataCoin.dataChart.map((item, id)=>{
    //console.log(item.name)
    //console.log(id)
  //})
  //console.log('datos de datacoin')
  return(
    <>
    <View style={styles.container}>
    <Accordion dataCoin={dataCoin} setDataCoin={setDataCoin} />
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
