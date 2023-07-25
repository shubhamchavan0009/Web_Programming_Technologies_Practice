const mysql=require('mysql2')

// connection string
const con=mysql.createConnection({
    host:"localhost",
    user:"root",
    port:"3306",
    password:"root",
    database:"nodejscrud"
})
con.connect((err)=>{
    if(err) throw err
    console.log("Connected !!")
    // con.end()
})

/* create table into database*/
let sql="CREATE TABLE DEPT(DEPTNO INT(2), DNAME varchar(14), LOC varchar(13) )"
con.query(sql,(err)=>{
    if(err) throw err
    console.log("Table created!!")
})

/* insert the record into database*/
// let sql="INSERT INTO DEPT(DEPTNO,DNAME,LOC) VALUES (50, 'MARKETING', 'GRENCHEN')"
// con.query(sql,(err)=>{
//     if(err) throw err
//     console.log("Record inserted !!")
// })

// let sql="SELECT * FROM DEPT"
// con.query(sql,(err,data)=>{
//     if(err) throw err
//     console.log(data)
// })

// let sql="SELECT * FROM DEPT WHERE DEPTNO=50"
// con.query(sql,(err,data)=>{
//     if(err) throw err
//     console.log(data)
// })

/* update the record into database*/

// let sql="UPDATE DEPT SET LOC='SWEDEN' WHERE DEPTNO=50"
// con.query(sql,(err,data)=>{
//     if(err) throw err
//     console.log(data)
// })
