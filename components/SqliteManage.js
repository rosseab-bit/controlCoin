import * as SQLite from 'expo-sqlite';
//expo install expo-sqlite

export default class SqliteManage {

  selectDb(db, query, valuesQuery = []){
    var db = SQLite.openDatabase('controlCoin.db');
    db.transaction((conn) => {
      conn.executeSql(query,
	valuesQuery,
	(conn, res) =>{
	  //console.log('This is the response RES from class:', res.rows);
	  const lenRows = res.rows.length;
	  //console.log('esto es el length del row class: ', lenRows)
	    const resDb = {}
	    resDb['dataSelect'] = res;
	  if (lenRows > 0){
	    //console.log(res)
	    //console.log('rows dio mayor a cero')
	    const resDb = {}
	    resDb['dataSelect'] = res;
	    return resDb;
	  } else {
	    resDb = {'Select query': 'Failed'}
	  }
	})
    });
    //return resDb;
  }


  insertDb(db, query, valuesQuery = []){
    console.log(valuesQuery)
    console.log(query)
    let connRes = '';
    this.db.transaction((conn) => {
      conn.executeSql(query,
	valuesQuery,
	(conn, res) =>{
	  //console.log('This is the response RES:', res);
	  if (res.rowsAffected > 0){
	    return connRes = 'Insert Successfully'
	  } else {
	    return connRes = 'Insert Failed'
	  }
	})
    });
  }


  updateDb(db, query, valuesQuery = []){
    let connRes = '';
    this.db.transaction((conn) => {
      conn.executeSql(query,
	valuesQuery,
	(conn, res) =>{
	  //console.log('This is the response RES:', res);
	  if (res.rowsAffected > 0){
	    connRes = 'Update Successfully'
	  } else {
	    connRes = 'Update  Failed'
	  }
	})
    });
    return connRes;
  }


  deleteDb(db, query, valuesQuery = []){
    let connRes = '';
    this.db.transaction((conn) => {
      conn.executeSql(query,
	valuesQuery,
	(conn, res) =>{
	  console.log('This is the response RES:', res);
	  if (res.rowsAffected > 0){
	    connRes = 'Update Successfully'
	  } else {
	    connRes = 'Update  Failed'
	  }
	})
    });
    return connRes;
  }
}
