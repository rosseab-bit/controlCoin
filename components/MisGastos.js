import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Defs, Line, LinearGradient, Stop } from "react-native-svg";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import AsyncStorage from '@react-native-async-storage/async-storage';
import DetailGastos from './DetailGastos';
import DuesDetails from './DuesDetails';
import NewGasto from './NewGasto';
import DellGasto from './DellGasto'
import InitialCapital from './InitialCapital';
import * as SQLite from 'expo-sqlite';
import SqliteManage from './SqliteManage';
const screenWidth = Dimensions.get("window").width;
  

// cargo base de datos de SQlite
var db = SQLite.openDatabase('controlCoin.db');

const MisGastos=({route, navigation})=>{
  //console.log('aca compienza los params')
  //console.log(route.params.data.dataStorage);
  //console.log('Aca finaliza los params')
  const [seeScreen, setSeeScreen]=useState(0);
  const [dataBaseCoin, setDatabaseCoin]=useState(route.params.data.dataStorage);
  const [savedData, setSavedData]=useState(dataBaseCoin);
  const [dataCoin, setDataCoin]=useState(savedData);
  const [seeUpdateCapital, setSeeUpdateCapital]=useState(false);
  const [dbSqlite, setDbSqlite] = useState({});

  // cargo base de datos de SQlite
  // Base de datos SQLite control de tablas.
  const queryStatus = "SELECT name FROM sqlite_master WHERE type='table'"
  const createTablesQuery = `CREATE TABLE Expenses (
	expenses_id INTEGER PRIMARY KEY DEFAULT 1,
	Farmacia REAL DEFAULT 0,
	Transporte REAL DEFAULT 0,
	Salida REAL DEFAULT 0,
	Panaderia REAL DEFAULT 0,
	Verduleria REAL DEFAULT 0,
	Supermercado REAL DEFAULT 0,
	Otros REAL DEFAULT 0,
	Efectivo REAL DEFAULT 0
);

CREATE TABLE Data_Chart (
	data_chart_id INTEGER PRIMARY KEY DEFAULT 1,
	Farmacia REAL DEFAULT 0,
	Transporte REAL DEFAULT 0,
	Salida REAL DEFAULT 0,
	Panaderia REAL DEFAULT 0,
	Verduleria REAL DEFAULT 0,
	Supermercado REAL DEFAULT 0,
	Otros REAL DEFAULT 0,
	Efectivo REAL DEFAULT 0
);
CREATE TABLE Capital (
  capital_id INTEGER PRIMARY KEY DEFAULT 1,
  capital_inicial REAL DEFAULT 0,
  capital_sobrante REAL DEFAULT 0
);
INSERT INTO Expenses (Farmacia, Transporte, Salida, Panaderia, Verduleria, Supermercado, Otros, Efectivo) VALUES (0, 0, 0, 0, 0, 0, 0, 0);
INSERT INTO Data_Chart (Farmacia, Transporte, Salida, Panaderia, Verduleria, Supermercado, Otros, Efectivo) VALUES (0, 0, 0, 0, 0, 0, 0, 0);
INSERT INTO Capital (capital_inicial, capital_sobrante) VALUES (0, 0);`
  db.transaction((conn) => {
    conn.executeSql(queryStatus, 
      [],
      (conn, res) => {
	if (res.rows.length == 0){
	  console.log('creating tables sqlite...: ', res)
	  conn.executeSql(
	    createTablesQuery,
	    []
	  )
	}
      }
    )
  });
  // Base de datos SQLite control de tablas.
  //
  //
  //db.transaction((conn) => {
    //conn.executeSql('DELETE FROM Expenses',
      //[],
      //(conn, res) => {
	//console.log('ITEM REs: ', res)
      //})
  //});

//console.log('aca esta el select desde mis gastos en crudo')
  //db.transaction((conn) => {
    //conn.executeSql('SELECT * FROM Expenses',
      //[],
      //(conn, res) => {
	//console.log('ITEM REs en crudo: ', res)
      //})
  //});

  // AsyncStorage para guardar base de datos
  const dataCoinAsyncStorage = dataCoin
  const storeData = async (dataCoinAsyncStorage) => {
try {
  await AsyncStorage.setItem('db_coin', dataCoinAsyncStorage)
} catch (e) {
  // saving error
}
}

const getData = async () => {
try {
const jsonValue = await AsyncStorage.getItem('db_coin')
return jsonValue != null ? JSON.parse(jsonValue) : null;
} catch(e) {
// error reading value
}
}


// manejo datos de SQLite
  const sqliteManageExpenses = (db, query, values = []) => {
    db.transaction((conn) => {
      conn.executeSql(query,
	values,
	(conn, res) => {
	  console.log('get data from expenses sqlite...: ', res.rows)
	  let listExpenses = res.rows._array
	  let itemsSql = {} 
	  itemsSql['Expenses'] = listExpenses 
	  setDbSqlite(itemsSql)
	})
    });
    }


  const sqliteManageDataChart = (db, query, values = []) => {
    db.transaction((conn) => {
      conn.executeSql(query,
	values,
	(conn, res) => {
	  console.log('get data from data_chart sqlite...: ', res)
	  let listExample = ['data', 'chart']
	  dbSqlite['Data_Chart'] = listExample 
	  setDbSqlite(dbSqlite)
	})
    });
    }
  const sqliteStartExpenses = (db, query, values = []) => {
    db.transaction((conn) => {
      conn.executeSql('SELECT * FROM Expenses',
	values,
	(conn, res) => {
	  console.log('start table expenses...: ', res)
	  if (res.rows.length == 0){
	    conn.executeSql(query, []);
	  }
	})
    });
    }
  const sqliteStartDataChart = (db, query, values = []) => {
    db.transaction((conn) => {
      conn.executeSql('SELECT * FROM Data_Chart',
	values,
	(conn, res) => {
	  console.log('start table data_chart...: ', res)
	  if (res.rows.length == 0){
	    conn.executeSql(query, []);
	  }
	})
    });
    }
  const sqliteStartCapital = (db, query, values = []) => {
    db.transaction((conn) => {
      conn.executeSql(query,
	values,
	(conn, res) => {
	  console.log('start table capital...: ', res)
	  if (res.rows.length == 0){
	    conn.executeSql(query, []);
	  }
	})
    });
    }

  useEffect(()=>{
    //storeData();
    // cargo dataCoin con datos de la base.
    const startExpenses = `INSERT INTO Expenses (Farmacia, Transporte, Salida, Panaderia, Verduleria, Supermercado, Otros, Efectivo) VALUES (0, 0, 0, 0, 0, 0, 0, 0);`
    const startDataChart = `INSERT INTO Data_Chart (Farmacia, Transporte, Salida, Panaderia, Verduleria, Supermercado, Otros, Efectivo) VALUES (0, 0, 0, 0, 0, 0, 0, 0);`
    const startCapital = `INSERT INTO Capital (capital_inicial, capital_sobrante) VALUES (0, 0);`
    sqliteStartExpenses(db, startExpenses);
    sqliteStartDataChart(db, startDataChart);
    sqliteStartCapital(db, startCapital);
    const queryExpenses = `SELECT * FROM Expenses`
    sqliteManageExpenses(db, queryExpenses);
    //const queryDataChart = `SELECT * FROM Data_Chart`
    //sqliteManageDataChart(db, queryDataChart);
    // cargo dataCoin con datos de la base.

    console.log(dbSqlite);
    storeData();
    setSavedData(getData())
    console.log('Guardando en AsyncStorage...')
  },[dataCoin]);

  const data_chart=dataCoin.dataChart;
  //console.log(data_chart)
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
  const switchScreen=()=>{
    setSeeScreen(0);
  };
  const switchScreenPlus=()=>{
    if (dataCoin.capitalInitial<1){
      return valueCapitalMessage()
    }
    setSeeScreen(1);
  }
  const switchScreenMinus=()=>{
    if (dataCoin.capitalInitial<1 || dataCoin.capitalInitial<1){
      return valueCapitalMessage()
    }
    setSeeScreen(2);
  }
  const SetScreen=()=>{
    if (seeScreen==0){
    //  <View style={styles.container}>
        return <DetailGastos dataCoin={dataCoin} setDataCoin={setDataCoin}/>
      //</View>
    }else if(seeScreen==1){
      return   <NewGasto dataCoin={dataCoin} setDataCoin={setDataCoin} setSeeScreen={setSeeScreen}/>
    }
    else if(seeScreen==2){
      return <DellGasto dataCoin={dataCoin} setDataCoin={setDataCoin} setSeeScreen={setSeeScreen}/>
    }
  }

  const valueCapitalMessage=()=>{
    Alert.alert(
      'Saldo Insuficiente',
      'Por favor verifica los valores de tu capital. ',
      [
        {text:'OK'}
      ]
    )
  }
  const alertCrearData=()=>{
    Alert.alert(
      'Alerta de Seguridad',
      'Si continua se borraran todos los datos',
      [
        {text:'OK', onPress:()=>clearAllData()},
        {text:'CANCELAR'}

      ]
    )
  }

  const clearAllData=()=>{
    db.transaction((conn) => {
      conn.executeSql('DELETE FROM Expenses',
	[],
	(conn, res) => {
	  console.log('ITEM REs en crudo: ', res)
	})
    });
    db.transaction((conn) => {
      conn.executeSql('DELETE FROM Data_Chart',
	[],
	(conn, res) => {
	  console.log('ITEM REs en crudo: ', res)
	})
    });
    const clearData=dataCoin;
    clearData.capitalInitial=0;
    clearData.saldo=0;
    clearData.dataChart.forEach((item, id)=>{
      clearData.dataChart[id].population=0;
    })
    clearData.expenses.forEach((item, id)=>{
      clearData.expenses[id].spending=0;
    })
    setSavedData(clearData);
  };

  return(
    <>
    <ScrollView style={styles.scrollStyle}>
    <View style={styles.container}>
    <View style={styles.containerInitial}>
      <TouchableOpacity
      onPress={()=>setSeeUpdateCapital(true)}
      style={styles.statusIitial}>
        <Text style={styles.textCapital}>
          <Icon name="money" size={20} color="#FFF" /> CI: ${dataCoin.capitalInitial}
        </Text>
      </TouchableOpacity>
      <View style={styles.statusIitial}>
        <Text style={styles.textSaldo}>
          <Icon name="heart" size={20} color="green" /> CR: ${dataCoin.saldo}
        </Text>
      </View>

    </View>
    <View>
    {seeUpdateCapital?(
      <>
        <InitialCapital
        dataCoin={dataCoin}
        setDataCoin={setDataCoin}
        setSeeUpdateCapital={setSeeUpdateCapital}
        />
      </>
    ):(
      <>
      </>)}
    </View>
    <View style={styles.charStyle}>

    <PieChart
    data={data_chart}
    width={screenWidth}
    height={200}
    chartConfig={chartConfig}
    accessor={"population"}
    backgroundColor={"black"}
    paddingLeft={"-20"}
    center={[5, 5]}
    absolute
/>
      </View>
      <View style={{ borderBottomColor: 'white', borderBottomWidth: 1, marginTop:10 }} />
      <View>
      </View>

      <View
      style={styles.container_buy}
      >
        <View style={styles.addDell}>
        <TouchableOpacity
        onPress={()=>switchScreenPlus()}
        >
          <Icon name="plus" size={40} color="#ea2323" />
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>switchScreenMinus()}
        >
          <Icon name="minus" size={40} color="#35dd49" />
        </TouchableOpacity>
        </View>
      </View>

      <View style={{ borderBottomColor: 'white', borderBottomWidth: 1, marginTop:5 }} />
      <View>
      </View>
      <View>
        <SetScreen />
      </View>

      <View style={{ borderBottomColor: 'white', borderBottomWidth: 1, marginTop:10 }} />
      <View>
      </View>
      <View style={{ borderBottomColor: 'white', borderBottomWidth: 1, marginTop:10 }} />
      <View>
      </View>

      <TouchableOpacity
      style={styles.dellDataContainer}
      onPress={()=>alertCrearData()}
      >
      <Text style={styles.dellDataText}>
        <Icon name="exclamation-triangle" size={30} color="red" /> <Text style={styles.dellDataText}> Reiniciar todos los datos</Text>
      </Text>
      </TouchableOpacity>
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
    borderWidth:1.5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginHorizontal:10,
  },
  scrollStyle:{
    flex:1,
    backgroundColor:'black'
  },
  containerInitial:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    marginTop:15,
  },
  statusIitial:{
    borderWidth: 1,
    backgroundColor:'black',
    padding:10,
    paddingTop:10,
    margin:10,
    marginTop:0,
    width:'45%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderColor:'white',
  },
  textCapital:{
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center',
    color:'#ea2323',
  },
  textNewBuy:{
    fontSize:20,
    fontWeight:'bold',
    color:'white',
    textAlign:'center'
  },
  container_buy:{
    flex:1,
    borderWidth: 1,
    backgroundColor:'black',
    padding:20,
    paddingTop:20,
    margin:10,
    marginTop:10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent:'center',
    borderColor:'white'
  },
  textSaldo:{
    color:'#35dd49',
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center',
  },
  addDell:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:50,
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

});

export default MisGastos;
