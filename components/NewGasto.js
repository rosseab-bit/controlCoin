import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  ImageBackground,
  Button,
  Alert } from 'react-native';
import DuesDetails from './DuesDetails';
import InitialCapital from './InitialCapital';
import Background from '../assets/img/bgCharts.jpg';
import {Picker} from '@react-native-picker/picker';
import SqliteManage from './SqliteManage';
import * as SQLite from 'expo-sqlite';



const Gastos=({dataCoin, setDataCoin, setSeeScreen})=>{
  var db = SQLite.openDatabase('controlCoin.db');
  const [gasto, setGasto]=useState('');
  const [costoGasto, setCostoGasto]=useState('');
  const [totalGastos, setTotalGastos]=useState(0);
  const [restoSaldo, setRestoSaldo]=useState(0)
  const valueCosto=costoGasto;
  const saveGasto=()=>{
    if(gasto.trim()==''||costoGasto.trim()==''){
      errorForm();
      return
    }
    updateDataBase();
    setGasto('');
    setCostoGasto('');
    savedSuccess();
    setSeeScreen(0);
  };
  const goDetails=()=>{
    setSeeScreen(0);
  }


  
// manejo datos de SQLite
  const sqliteManage = (db, query, values = []) => {
    db.transaction((conn) => {
      conn.executeSql(query,
	values,
	(conn, res) => {
	  console.log('appli new gasto in SQLite...: ', res.rows)
	})
    });
    }
// manejo datos de SQLite


  // calculo el grafico de torta.

  const updateDataBase=()=>{
    dataCoin.expenses.map((item, id)=>{
      if (item.name==gasto){
        const dataUpdated=dataCoin;
        const costo_saved=parseFloat(dataUpdated.expenses[id].spending);
        const costo_total=costo_saved + parseFloat(costoGasto);
        dataUpdated.expenses[id].spending=costo_total;

	// querys para la base de datos
	console.log('procesando item...', item.name)
	const queryUpdateExpenses = `UPDATE Expenses SET ${item.name}=${costo_total} where expenses_id = 1`
	console.log(queryUpdateExpenses)
	const valuesQuery = [costo_total]
	sqliteManage(db, queryUpdateExpenses, valuesQuery)

        setCostoGasto(parseFloat(costo_total))
        const saldo_final=parseFloat(dataUpdated.saldo)-parseFloat(costoGasto);
        dataUpdated.saldo=parseFloat(saldo_final);
        dataUpdated.dataChart[8].population=parseInt(dataUpdated.saldo)
	// querys para la base de datos 
	const queryUpdateSaldo = `UPDATE Captital SET capital_sobrante=${dataUpdated.dataChart[8].population} where capital_id = 1`
	console.log(queryUpdateSaldo)
	let valuesSaldo = [dataUpdated.saldo]
	sqliteManage(db, queryUpdateSaldo)

        setRestoSaldo(parseFloat(saldo_final))
        setDataCoin(dataUpdated);
      }
    })
    console.log('aca esta dataChard de new gasto');
    //console.log(dataCoin.dataChart)
    console.log('aca termina dataChard de new gasto');
    dataCoin.dataChart.map((item, id)=>{
      if (item.name==gasto){
        const dataUpdated=dataCoin;
        dataUpdated.dataChart[id].population=dataUpdated.dataChart[id].population + parseInt(costoGasto)
        setDataCoin(dataUpdated);
	// querys para la base de datos
	console.log('procesando item...', item.name)
	const queryUpdateChart = `UPDATE Data_Chart SET ${item.name}=${dataUpdated.dataChart[id].population} where data_chart_id = 1`
	console.log(queryUpdateChart)
	let valuesDataChart = [parseInt(costoGasto)]
	sqliteManage(db, queryUpdateChart)

      }
    })
  };

  const savedSuccess=()=>{
    Alert.alert(
      'Se guardo correctamente',
      'Ya se puede visualizar los montos desde Mis Gastos',
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

  // calculo el grafico de torta.

  return(
    <>
    <ScrollView style={styles.scrollStyle}>
    <View>
        <View style={styles.formulario}>


          <Text style={styles.label}>Ingrese el monto de la compra</Text>
          <TextInput
            style={styles.input}
            onChangeText={text=> setCostoGasto(text)}
            value={valueCosto}
          />
          <View >
          <Text style={styles.label}>Ingrese tipo de Gasto</Text>
          <Picker
            style={styles.pickerSelect}
            selectedValue={gasto}
            onValueChange={(itemValue, itemIndex) =>
              setGasto(itemValue)
            }>
            <Picker.Item label="- Seleccione -" value="" />
            <Picker.Item label={dataCoin.dataChart[0].name} value={dataCoin.dataChart[0].name} />
            <Picker.Item label={dataCoin.dataChart[1].name} value={dataCoin.dataChart[1].name} />
            <Picker.Item label={dataCoin.dataChart[2].name} value={dataCoin.dataChart[2].name} />
            <Picker.Item label={dataCoin.dataChart[3].name} value={dataCoin.dataChart[3].name} />
            <Picker.Item label={dataCoin.dataChart[4].name} value={dataCoin.dataChart[4].name} />
            <Picker.Item label={dataCoin.dataChart[5].name} value={dataCoin.dataChart[5].name} />
            <Picker.Item label={dataCoin.dataChart[6].name} value={dataCoin.dataChart[6].name} />
            <Picker.Item label={dataCoin.dataChart[7].name} value={dataCoin.dataChart[7].name} />
            </Picker>
            </View>
        <View style={styles.btnSave}>
        <Button
          title="Guardar"
          onPress={()=>saveGasto()}
        />
        </View>

    </View>
    <View style={styles.btnBack}>
    <Button
      title="Volver"
      onPress={()=>goDetails()}
    />
    </View>
    </View>
    </ScrollView>
    </>
  );
};

const styles=StyleSheet.create({
  formulario:{
    backgroundColor:'black',
    paddingHorizontal:20, /*Con esto damos margenes a ambos lados por igual.*/
    paddingVertical:15, /*Esto es para dar espacio tanto arriba como a bajo*/
    marginHorizontal:'2.5%', /*Esto es para que no tome toda la pantalla. En este caso 2.5 por cada lado*/
    marginTop:15,
    marginBottom:15,
    borderRadius:15,
    borderWidth: 1,
    borderColor:'white'
    },
  input:{
    marginTop:10,
    height:50,
     /*Siempre tenemos que colocar cada atributo de border por separado*/
    borderWidth:1,
    borderStyle:'solid',
    borderRadius:10,
    borderWidth: 1,
    textAlign:'center',
    fontSize:15,
    borderColor:'white',
    color:'white'
  },
  label:{
    fontWeight:'bold',
    color:'white',
    marginTop:10,
    textAlign:'center',
    fontSize:15,
  },
  title:{
    textAlign:'center',
    fontSize:25,
    marginTop:10,
    marginHorizontal:'2.5%',
    color:'white'
  },
  scrollStyle:{
    flex:1,
    backgroundColor:'black'
  },
  pickerSelect:{
    backgroundColor:'#DADAD8',
    paddingBottom:5,
    textAlign:'center'
  },
  btnSave:{
    paddingTop:10,
  },
  btnBack:{
    paddingTop:10,
    paddingHorizontal:20,
    marginBottom:20,
  }
});

export default Gastos;
