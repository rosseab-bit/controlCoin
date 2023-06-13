import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DataCoin from './DataCoin';
const Accordion=({dataCoin, setDataCoin})=>{
  const seeDetails=()=>{
  }
  const AccordionItems = () => {
    return (
      dataCoin.expenses.map((item)=>(
        <View style={styles.borderMidle}>
          <Text style={styles.itemTitle}>
            <Icon name="credit-card" size={20} color="white" /> {item.name}
          </Text>
          <Text style={styles.itemGasto}>
            $ {item.spending}
          </Text>
        </View>
      ))
    );
  }
  return(
    <>
    <View style={styles.container}>
      <AccordionItems />
    </View>
    </>
  );
};

const styles=StyleSheet.create({
  container:{},
  borderMidle:{
    flex:1,
    borderWidth: 1,
    backgroundColor:'black',
    padding:10,
    paddingTop:10,
    margin:10,
    marginTop:0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection:'row',
    justifyContent:'space-between',
    borderColor:'white'
  },
  itemGasto:{
    fontWeight:'bold',
    fontSize:20,
    color:'#ea2323'
  },
  itemTitle:{
    fontWeight:'bold',
    fontSize:20,
    color:'white'
  },
});
export default Accordion;
