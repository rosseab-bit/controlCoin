import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, ImageBackground, Button, Alert } from 'react-native';
import DuesDetails from './DuesDetails';
import InitialCapital from './InitialCapital';
import Background from '../assets/img/bgCharts.jpg';
import {Picker} from '@react-native-picker/picker';
const Gastos=({navigation, route})=>{
  //console.log(route.items)
  const [gasto, setGasto]=useState('');
  const [costoGasto, setCostoGasto]=useState('');
  const saveGasto=()=>{
    if(gasto.trim()==''||costoGasto.trim()==''){
      errorForm();
      return
    }
    console.log(gasto);
    console.log(costoGasto);
    console.log('Vacio el formulario');
    setGasto('');
    setCostoGasto('');
    savedSuccess();
  };

  const savedSuccess=()=>{
    Alert.alert(
      'Se guardo correctamente',
      'Podra editar las cuotas que le falta desde el menu',
      [
        {text:'OK'}
      ]
    )
  }

  const errorForm=()=>{
    Alert.alert(
      'Campos vacios',
      'Debe completar todos los campos para poder guardar una nueva compra',
      [
        {text:'OK'}
      ]
    )
  }
  return(
    <>
    <ScrollView style={styles.scrollStyle}>
    <View>
    <View>
      <Text style={styles.title}> Agregar compra nueva compra</Text>
    </View>
    <View style={styles.formulario}>
      <Text style={styles.label}>Ingrese el monto de la compra</Text>
      <TextInput
        style={styles.input}
        onChangeText={text=> setCostoGasto(text)}
        value={costoGasto}
      />
      <Text style={styles.label}>Ingrese tipo de compra</Text>
      <View style={styles.pickerSelect}>
      <Picker
        selectedValue={gasto}
        onValueChange={(itemValue, itemIndex) =>
          setGasto(itemValue)
        }>
        <Picker.Item label="- Seleccione -" value="" />
        <Picker.Item label="Farmacia" value="Farmacia" />
        <Picker.Item label="Transporte" value="Transporte" />
        <Picker.Item label="Salida" value="Salida" />
        <Picker.Item label="Panaderia" value="Panaderia" />
        <Picker.Item label="Verduleria" value="Verduleria" />
        <Picker.Item label="Otros" value="Otros" />
        </Picker>
        </View>
        <View style={styles.btnSave}>
        <Button
          title="Guardar"
          onPress={()=>saveGasto()}
        />
        </View>
    </View>
    <View>
      <DuesDetails/>
    </View>
    </View>
    </ScrollView>
    </>
  );
};

const styles=StyleSheet.create({
  formulario:{
    backgroundColor:'#FFF',
    paddingHorizontal:20, /*Con esto damos margenes a ambos lados por igual.*/
    paddingVertical:15, /*Esto es para dar espacio tanto arriba como a bajo*/
    marginHorizontal:'2.5%', /*Esto es para que no tome toda la pantalla. En este caso 2.5 por cada lado*/
    marginTop:15,
    marginBottom:15,
    borderRadius:15,
    borderWidth: 3,
    },
  input:{
    marginTop:10,
    height:50,
     /*Siempre tenemos que colocar cada atributo de border por separado*/
    borderWidth:1,
    borderStyle:'solid',
    borderRadius:10,
    borderWidth: 3,
    textAlign:'center',
    fontSize:15
  },
  label:{
    fontWeight:'bold',
    color:'black',
    marginTop:10
  },
  title:{
    textAlign:'center',
    fontSize:25,
    marginTop:10,
    marginHorizontal:'2.5%'
  },
  scrollStyle:{
    flex:1,
    backgroundColor:'#FFF'
  },
  pickerSelect:{
    textAlign:'center',
    alignContent:'center',
    backgroundColor:'#DADAD8',
    borderRadius:10,
    paddingBottom:5,
    borderWidth: 3,
    textAlign:'center'
  },
  btnSave:{
    paddingTop:10,
  },
});

export default Gastos;
