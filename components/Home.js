import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home=()=>{
  return(
    <ScrollView style={styles.container}>
      <View>
      <Text style={styles.titleHome}>
        Manejá tus gastos!
      </Text>
      </View>
      <View style={styles.containerBienvenido}>
      <Text style={styles.textDetail}>
        Bienvenido! En esta primera version podras controlar tus gastos
        y de esta manera llevar un manejo de tus finanzas personales.
      </Text>
      </View>
      <View style={styles.containerUsage}>
        <Text style={styles.titleUsage}>
          Comencemos!
        </Text>

      </View>
      <View>
      <Text style={styles.iconUsage}>
      <Icon name="level-down" size={50} color="green" />
      </Text>
      </View>

      <View style={styles.containerInitial}>
        <View style={styles.statusIitial}>
        <Text style={styles.textCapital}>
          <Icon name="money" size={20} color="#FFF" /> CI: $10000
        </Text>
        </View>
        <View style={styles.container_ci}>
          <Text style={styles.text_ci}>
            Antes de empezar presiona en este boton ingresa tu capital incial. Esto servira para poder realizar los
            calculos sobre los gastos que realices.
          </Text>
        </View>
      </View>
      <View>
      <Text style={styles.iconUsage}>
      <Icon name="angle-down" size={50} color="green" />
      </Text>
      </View>

      <View style={styles.container_ng}>
        <Text style={styles.text_ng}>
        <Icon name="plus" size={20} color="red" />  Ingresar nuevo gasto
        </Text>
        <Text style={styles.text_ng}>
        <Icon name="minus" size={20} color="green" /> Borrar un gastos
        </Text>
        <View style={styles.description_ng}>
          <Text style={styles.textDescription}>
            Desde mis gastos podras ingresas las compras que realices y clasificarlos
            en una categoria. Los cuales podras ver luego desde mis gastos por categorias.
            Tambien podras borrar si es que ingresaste un monto de mas o a algua categoria que no
            correspondia
          </Text>
        </View>
      </View>

      <View>
      <Text style={styles.iconUsage}>
      <Icon name="angle-down" size={50} color="green" />
      </Text>
      </View>

      <View
      style={styles.dellDataContainer}
      >
      <Text style={styles.dellDataText}>
        <Icon name="exclamation-triangle" size={30} color="red" /> <Text style={styles.dellDataText}> Reiniciar todos los datos</Text>
      </Text>
      </View>
      <View style={styles.description_alert}>
        <Text style={styles.textAlert}>
          Al final de Mis Gastos podras borrar todos tus datos. Esto elimina
          completamente los datos sin posibilidad de recuperar. Esta opcion esta
          pensada para usarla a cada principio de mes para comenzar nuevamente el
          control de los gastos.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'black'
  },
  textDetail:{
    color:'white',
    marginHorizontal:10
  },
  titleHome:{
    color:'white',
    fontSize:25,
    textAlign:'center'
  },
  containerBienvenido:{
    borderWidth: 1,
    borderColor:'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginHorizontal:5,
    marginTop:10,
    alignItems:'center',
  },
  containerUsage:{
    marginHorizontal:5,
    marginTop:20,
    alignItems:'center',
  },
  titleUsage:{
    color:'white',
    marginHorizontal:10,
    fontSize:20,
  },
  iconUsage:{
    textAlign:'center',
  },
  containerInitial:{
    flexDirection:'row',
    justifyContent:'flex-start'

  },
  statusIitial:{
    borderWidth: 1,
    padding:10,
    paddingTop:10,
    margin:10,
    marginTop:35,
    width:'45%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderColor:'white',
    height:'35%'
  },
  textCapital:{
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center',
    color:'#ea2323',
  },
  text_ci:{
    color:'white'
  },
  container_ci:{
    alignItems:'center',
    borderWidth: 1,
    padding:10,
    paddingTop:10,
    margin:10,
    marginTop:10,
    width:'45%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderColor:'white'
  },
  container_ng:{
    flex:1,
    padding:20,
    paddingTop:20,
    margin:10,
    marginTop:10,
    justifyContent:'center',
  },
  text_ng:{
    fontSize:20,
    fontWeight:'bold',
    color:'white',
    textAlign:'center'
  },
  description_ng:{
    alignItems:'center',
    borderWidth: 1,
    padding:10,
    paddingTop:10,
    margin:20,
    marginTop:20,
    width:'90%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderColor:'white',
    justifyContent:'center'
  },
  textDescription:{
    color:'white'
  },
  dellDataText:{
    fontWeight:'bold',
    fontSize:20,
    color:'white',
    textAlign:'center',
    marginHorizontal:20
  },
  dellDataContainer:{
    flex:1,
    borderWidth: 1,
    backgroundColor:'black',
    padding:10,
    paddingTop:10,
    margin:10,
    marginTop:15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection:'row',
    justifyContent:'space-between',
    borderColor:'white'
  },
  description_alert:{
    alignItems:'center',
    borderWidth: 1,
    padding:10,
    margin:10,
    paddingTop:10,
    marginHorizontal:40,
    marginTop:20,
    width:'80%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderColor:'white',
    justifyContent:'center',
    paddingHorizontal:10
  },
  textAlert:{
      color:'white'
  }
});

export default Home;
