import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Injectable()
export class DbProvider {
  db : SQLiteObject = null;
  constructor(public sqlite: SQLite) {
    console.log('Hello DbProvider Provider');
  }

  public openDb(){
    return this.sqlite.create({
        name: 'data.db',
        location: 'default' // el campo location es obligatorio
    })
    .then((db: SQLiteObject) => {
     this.db =db;
   })
  }

  public createTables(){
    return this.db.executeSql(
      "create table if not exists ingreso( id INTEGER PRIMARY KEY AUTOINCREMENT, importe FLOAT, tipo TEXT, categoria TEXT, fecha DATA, hora DATA, nota TEXT, foto TEXT )",{})
      .then (()=>{
        return this.db.executeSql(
          "create table if not exists gasto( id INTEGER PRIMARY KEY AUTOINCREMENT, importe FLOAT, tipo TEXT, categoria TEXT, fecha DATA, hora DATA, nota TEXT, foto TEXT )",{})


      }).catch((err)=>console.log("error detected creating tables", err));
  }

  public cargarIngreso(ingreso){
    let sql = "INSERT INTO ingreso (importe, tipo, categoria, fecha, hora,nota, foto) values (?,?,?,?,?,?,?)";
    return this.db.executeSql(sql,[ingreso.importe,ingreso.tipo,ingreso.categoria,ingreso.fecha,ingreso.hora,ingreso.nota,ingreso.foto]);
  }

  public getIngreso(){
    let sql = "SELECT * FROM ingreso";
    return this.db.executeSql(sql,{});
  }



  public cargarGasto(gasto){
    let sql = "INSERT INTO gasto (importe, tipo, categoria, fecha, hora,nota, foto) values (?,?,?,?,?,?,?)";
    return this.db.executeSql(sql,[gasto.importe,gasto.tipo,gasto.categoria,gasto.fecha,gasto.hora,gasto.nota,gasto.foto]);
  }

  public getGasto(){
    let sql = "SELECT * FROM gasto";
    return this.db.executeSql(sql,{});
  }

  public borrarIngreso(id){
    let sql = "DELETE FROM ingreso WHERE id= ? ";
    return this.db.executeSql(sql,[id]);
 }

 public borrarGasto(id){
  let sql = "DELETE FROM gasto WHERE id= ? ";
  return this.db.executeSql(sql,[id]);
}

}
