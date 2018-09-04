/**
 * Created by 熙冰 on 2018/9/4
 */

/*cnpm install mysql
在node环境下实现mysql，首先需要将mysql下载到本地。*/
let mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'test'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
});

let sql = 'select * from websites';
//查
connection.query(sql, function (err, result) {
    if (err) {
        console.log('[select error] - ', err.message);
        return;
    }

    console.log('--------------------------SELECT----------------------------');
    console.log(result);
    console.log('------------------------------------------------------------\n\n');
});

let addSql = 'insert into websites(id,name,tel) VALUES(0,?,?)';
let addSqlParams = ['五', '15'];
//增
connection.query(addSql, addSqlParams, function (err, result) {
    if (err) {
        console.log('[insert error] - ', err.message);
        return;
    }

    console.log('--------------------------INSERT----------------------------');
    console.log('INSERT ID:', result);
    console.log('-----------------------------------------------------------------\n\n');
});

let modSql = 'UPDATE websites SET name = ?,tel = ? WHERE Id = ?';
let modSqlParams = ['六', '16', 6];
//改
connection.query(modSql, modSqlParams, function (err, result) {
    if (err) {
        console.log('[UPDATE ERROR] - ', err.message);
        return;
    }
    console.log('--------------------------UPDATE----------------------------');
    console.log('UPDATE affectedRows', result.affectedRows);
    console.log('-----------------------------------------------------------------\n\n');
});

let delSql = 'DELETE FROM websites where id=6';
//删
connection.query(delSql, function (err, result) {
    if (err) {
        console.log('[DELETE ERROR] - ', err.message);
        return;
    }

    console.log('--------------------------DELETE----------------------------');
    console.log('DELETE affectedRows', result.affectedRows);
    console.log('-----------------------------------------------------------------\n\n');
});

connection.end();
