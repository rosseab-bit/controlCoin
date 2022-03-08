import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import {Picker} from '@react-native-picker/picker';

const DuesDetails=()=>{
  // estados para guardar cada dato del formulario
  const [compra, setCompra]=useState('');
  const [costo, setCosto]=useState('');
  const [cuotas, setCuotas]=useState('');
  const saveDues=()=>{
    if(compra.trim()==''||costo.trim()==''||cuotas.trim()==''){
      errorForm();
      return
    }
    console.log('guardando datos del formulario')
    console.log(compra);
    console.log(costo);
    console.log(cuotas);
    setCompra('');
    setCosto('');
    setCuotas('');
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
      'Debe completar todos los campos para poder guardar una compra a cuotas',
      [
        {text:'OK'}
      ]
    )
  }
  return(
    <>
    <View>
    <Text style={styles.title}> Agregar compra a cuotas </Text>
    </View>
    <View style={styles.formulario}>
      <Text style={styles.label}>¿Que compraste?</Text>
      <TextInput
        style={styles.input}
        onChangeText={text=>setCompra(text)}
        value={compra}
      />
      <Text style={styles.label}>¿Cuanto te salio?</Text>
      <TextInput
        style={styles.input}
        onChangeText={text=>setCosto(text)}
        value={costo}
      />
      <Text style={styles.label}>¿Cuantas cuotas?</Text>
      <Picker
        selectedValue={cuotas}
        onValueChange={(itemValue, itemIndex) =>
          setCuotas(itemValue)
        }>
        <Picker.Item label="- Seleccione -" value="" />
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
        <Picker.Item label="6" value="6" />
        <Picker.Item label="12" value="12" />
        <Picker.Item label="18" value="18" />
        <Picker.Item label="24" value="24" />
        </Picker>
      <Button
        title="Guardar"
        onPress={()=>saveDues()}
      />
    </View>
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
  title:{
    textAlign:'center',
    fontSize:25,
    marginTop:10,
    marginHorizontal:'2.5%'
  },
  input:{
    marginTop:10,
    height:50,
   /*Siempre tenemos que colocar cada atributo de border por separado*/
    borderWidth:1,
    borderStyle:'solid',
    marginBottom:15,
    borderRadius:10,
    borderWidth: 3,
    textAlign:'center',
    fontSize:15,
  },
  label:{
    fontWeight:'bold',
    color:'black',
    marginTop:10,
    },
});

export default DuesDetails;
