import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import { Defs, Line, LinearGradient, Stop } from "react-native-svg";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import DetailGastos from './DetailGastos'

const screenWidth = Dimensions.get("window").width;

const Resumen=({navigation, route, dataBase, props})=>{
  //console.log(navigation.getState())
  //console.log(route)
  //console.log(navigation)
  //console.log(navigation.getState())
  //console.log(dataBase)
  //console.log(props)
  const data = [
  {
    name: "Salud",
    population: 1,
    color: "rgba(131, 167, 234, 1)",
    legendFontColor: "#000000",
    legendFontSize: 15
  },
  {
    name: "Transporte",
    population: 2,
    color: "#F00",
    legendFontColor: "#000000",
    legendFontSize: 15
  },
  {
    name: "Salida",
    population: 3,
    color: "green",
    legendFontColor: "#000000",
    legendFontSize: 15
  },
  {
    name: "Panaderia",
    population: 4,
    color: "#ffffff",
    legendFontColor: "#000000",
    legendFontSize: 15
  },
  {
    name: "Verduleria",
    population: 3,
    color: "rgb(0, 0, 255)",
    legendFontColor: "#000000",
    legendFontSize: 15
  },
  {
    name: "Otros",
    population: 5,
    color: "rgb(0, 0, 240)",
    legendFontColor: "#000000",
    legendFontSize: 15,
  },
  {
    name: "Efectivo",
    population: 5,
    color: "rgb(0, 0, 130)",
    legendFontColor: "#000000",
    legendFontSize: 15,
  }
];


  const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 10) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};

  return(
    <>
    <ScrollView style={styles.scrollStyle}>
    <View style={styles.container}>
    <View style={styles.containerInitial}>
      <View style={styles.statusIitial}>
        <Text style={styles.textInitial}>
          MI: $15000
        </Text>
      </View>
      <View style={styles.statusIitial}>
        <Text style={styles.textInitial}>
          MR: $15000
        </Text>
      </View>
    </View>
    <View style={styles.charStyle}>
    <PieChart
    data={data}
    width={screenWidth}
    height={200}
    chartConfig={chartConfig}
    accessor={"population"}
    backgroundColor={"transparent"}
    paddingLeft={"5"}
    center={[5, 5]}
    absolute
/>
      </View>
      <View style={styles.container}>
        <DetailGastos/>
      </View>
    </View>
    </ScrollView>
    </>
  )
};

const styles=StyleSheet.create({
  container:{
    flex:1,
    padding:0,

  },
  charStyle:{
    borderRadius:5,
    marginTop:5,
    backgroundColor:'#7191a9',
    borderWidth:3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  scrollStyle:{
    flex:1,
    backgroundColor:'#FFF'
  },
  containerInitial:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center'
  },
  statusIitial:{
    borderWidth: 3,
    backgroundColor:'#D5D5D5',
    padding:20,
    paddingTop:20,
    margin:10,
    marginTop:0,
    width:'45%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  textInitial:{
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center',
  },
});

export default Resumen;
