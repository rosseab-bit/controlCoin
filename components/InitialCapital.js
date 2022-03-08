import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

const InitialCapital=({navigation, route})=>{
   const [capitalInitial, setCapitalInitial]=useState('');
   const saveCuotas=()=>{
     console.log('Guardando Cuotas...')
   };
  return(
    <>
      <View>
        <Text style={styles.textTittle}>
          Ingresar capital Inicial
        </Text>
      </View>
      <View style={styles.container}>
        <View style={styles.formBox}>
          <Text style={styles.textLabel}>
            Ingrese el capital inicial
          </Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text=> setCapitalInitial(text)}
            value={capitalInitial}
          />
          <View style={styles.btnSave}>
          <Button
            title="Update"
            onPress={()=>saveCuotas()}
          />
          </View>
        </View>
        <View style={styles.detailBox}>
          <Text style={styles.detailText}>
            Antes de comenzar a operar debe ingresar el monto inicial que
            dispone para que se comience a "debitar" y llevar un control a
            partir de ese monto. Lo cual incluye alertas de gastos y seguimiento
            de cada uno de los gastos que realice siempre y cuando lo anote en la app.-
          </Text>
        </View>
      </View>
    </>
  );
};
const styles=StyleSheet.create({
  container:{

  },
  formBox:{
    backgroundColor:'#FFF',
    paddingHorizontal:20, /*Con esto damos margenes a ambos lados por igual.*/
    paddingVertical:15, /*Esto es para dar espacio tanto arriba como a bajo*/
    marginHorizontal:'2.5%', /*Esto es para que no tome toda la pantalla. En este caso 2.5 por cada lado*/
    marginTop:15,
    marginBottom:15,
    borderRadius:15,
    borderWidth: 3,
  },
  detailBox:{
    backgroundColor:'#FFF',
    paddingHorizontal:20, /*Con esto damos margenes a ambos lados por igual.*/
    paddingVertical:15, /*Esto es para dar espacio tanto arriba como a bajo*/
    marginHorizontal:'2.5%', /*Esto es para que no tome toda la pantalla. En este caso 2.5 por cada lado*/
    marginTop:15,
    marginBottom:15,
    borderRadius:15,
    borderWidth: 3,
  },
  textTittle:{
    textAlign:'center',
    fontSize:25,
    marginTop:10,
    marginHorizontal:'2.5%'
  },
  textLabel:{
    fontWeight:'bold',
    color:'black',
    marginTop:10
  },
  detailText:{
    fontStyle: 'italic',
    fontWeight:'bold',
  },
  textInput:{
    marginTop:10,
    height:50,
   /*Siempre tenemos que colocar cada atributo de border por separado*/
    borderWidth:1,
    borderStyle:'solid',
    marginBottom:5,
    borderRadius:10,
    borderWidth: 3,
    fontSize:20,
    textAlign:'center',
  },
  btnSave:{
    paddingTop:10,
  },
});
export default InitialCapital;
