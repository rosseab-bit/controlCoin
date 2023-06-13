import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const InitialCapital=({dataCoin, setDataCoin, setSeeUpdateCapital})=>{
   const [db, setDb]=useState({});
   const[capital, setCapital]=useState(0);
   const data_test=dataCoin;

   // actualizo el capital
   data_test.capitalInitial=capital;
   var total=0;
   data_test.expenses.forEach((item, i) => {
   total+=parseFloat(item.spending);
  });
   const total_expense=total
   // actualizo el saldo
   data_test.saldo=capital-total_expense;
   data_test.dataChart[8].population=data_test.saldo
   const dataUpdate={'dataStorage':data_test}
   const updateCapital=()=>{
      setSeeUpdateCapital(false);
      setDataCoin(data_test);
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
            onChangeText={text=> setCapital(text)}
          />
          <View style={styles.btnSave}>
          <Button
            title="Update"
            onPress={()=>updateCapital()}
          />
          </View>
        </View>
        <View style={styles.detailBox}>
          <Text style={styles.detailText}>
            El capital inicial se utiliza para poder realizar los
            calculos en base a ese valor. Este valor lo puede editar
            en cualquier momento pero afectara al resto de los calculos
            que se realicen a partir de ese momento.
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
    borderWidth: 1,
  },
  detailBox:{
    backgroundColor:'#FFF',
    paddingHorizontal:20, /*Con esto damos margenes a ambos lados por igual.*/
    paddingVertical:15, /*Esto es para dar espacio tanto arriba como a bajo*/
    marginHorizontal:'2.5%', /*Esto es para que no tome toda la pantalla. En este caso 2.5 por cada lado*/
    marginTop:15,
    marginBottom:15,
    borderRadius:15,
    borderWidth: 1,
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
