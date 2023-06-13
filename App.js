import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NewGasto from './components/NewGasto';
import MisGastos from './components/MisGastos';
import InitialCapital from './components/InitialCapital';
import About from './components/About';
import DataCoin from './components/DataCoin';
import Home from './components/Home';
import DuesDetails from './components/DuesDetails';
import Icon from 'react-native-vector-icons/FontAwesome';

const Drawer = createDrawerNavigator();
const DrawerNavigation=()=> {
  const dataBase={'dataStorage':DataCoin()}
  const[data, setData]=useState(dataBase);
  const storeData=(vaue_data)=>{
    setData(vaue_data);
  }
  const dataStorage={'save':storeData,
                    'data':data}
  return (

    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      initialRouteName="Home"
      drawerStyle={{
          backgroundColor: 'red',
        }}
      screenOptions={{
        drawerStyle: {
        backgroundColor: 'black',
        width: '70%',
        },
        }}
    >
      <Drawer.Screen name="Inicio" component={Home}/>
      <Drawer.Screen name="Mis Gastos" component={MisGastos}/>
      <Drawer.Screen name="Ingresar el capital" component={InitialCapital}/>
      <Drawer.Screen name="Nuevo gasto" component={DuesDetails}/>
      <Drawer.Screen name="About" component={About}/>
    </Drawer.Navigator>
  );
}

function CustomDrawerContent({navigation, props}) {
  const dataBase={'dataStorage':DataCoin()}
  const[data, setData]=useState(dataBase);
  const storeData=(vaue_data)=>{
    setData(vaue_data);
  }
  const dataStorage={'save':'ok',
                    'data':data}
  return (
    <DrawerContentScrollView>
    <View>
      <Image
      source={require("./assets/img/wallet.jpg")}
      style={styles.imgStyle}
      />
    </View>
    <View style={styles.container_btn}>
      <TouchableOpacity style={styles.btn}
        onPress={()=>{navigation.navigate('Inicio')}}
        >
          <Text style={styles.itemIcon}>
            <Icon name="star" size={20} color="#FFF" />
          </Text>
          <Text style={styles.titleItem}>
          Inicio
          </Text>
      </TouchableOpacity>
    </View>
    <View style={styles.container_btn}>
      <TouchableOpacity style={styles.btn}
        onPress={()=>{navigation.navigate('Mis Gastos', dataStorage)}}
        >
        <Text style={styles.itemIcon}>
          <Icon name="money" size={20} color="#FFF" />
        </Text>
          <Text style={styles.titleItem}>Mis Gastos</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.container_btn}>
      <TouchableOpacity style={styles.btn}
        onPress={()=>{navigation.navigate('About')}}
        >
        <Text style={styles.itemIcon}>
          <Icon name="comment" size={20} color="#FFF" />
        </Text>
          <Text style={styles.titleItem}>About</Text>
      </TouchableOpacity>
    </View>
    </DrawerContentScrollView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  btn:{
    backgroundColor:'black',
    marginTop:5,
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection:'row',
    alignItems:'center',
    borderColor: "white",

  },
  titleItem:{
    fontSize:20,
    textAlign:'center',
    marginLeft:10,
    margin:5,
    color:'#FFF'
  },
  itemIcon:{
    margin:5,
  },
  container_btn:{
    flex:1,
    paddingHorizontal:5,
    borderTopColor:'#FFF',
  },
  imgStyle:{
    alignItems:'center'
  }
});
