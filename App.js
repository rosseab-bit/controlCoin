import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Resumen from './components/Resumen';
import Gastos from './components/Gastos';
import About from './components/About';
import Cuotas from './components/Cuotas';
import InitialCapital from './components/InitialCapital';

const Drawer = createDrawerNavigator();
export default function App({navigation, route, props}) {
  const [dataBase, setDatabase]=useState({'test':'test1'});
  const datas = [
  {
    name: "Farmacia",
    population: 1,
    color: "rgba(131, 167, 234, 1)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "Transporte",
    population: 2,
    color: "#F00",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "Salida",
    population: 3,
    color: "green",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "Panaderia",
    population: 4,
    color: "#ffffff",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "Verduleria",
    population: 3,
    color: "rgb(0, 0, 255)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "Otros",
    population: 3,
    color: "rgb(0, 0, 240)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  }
];
  return (
    <>
    <NavigationContainer >
    <Drawer.Navigator >
      <Drawer.Screen name="Resumen de Gastos" component={Resumen} params={dataBase} />
      <Drawer.Screen name="Gestion de Gastos" component={Gastos} />
      <Drawer.Screen name="Administrar Cuotas" component={Cuotas} />
      <Drawer.Screen name="Ingresar el capital" component={InitialCapital} />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
