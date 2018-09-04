/**
 * Created by 熙冰 on 2018/9/4
 */
const express = require('express');
const app = express();

//解析表单等数据
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));//application/x-www-form-urlen


//创建数据库连接对象
const mysql = require('mysql');
const conn = mysql.createConnection({
    host: '127.0.0.1',//数据库地址
    user: 'root',//账号
    password: '123456',//密码
    database: 'test',//库名
    multipleStatements: true //允许执行多条语句
});

//查
app.get('/api/find', (req, res) => {
    const sqlStr = 'select * from websites';
    conn.query(sqlStr, (err, results) => {
        if (err) return res.json({err_code: 1, message: '数据不存在', affextedRows: 0});
        res.json({err_code: 200, message: results, affextedRows: results.affextedRows});
    })
});

//条件查找
app.get('/api/conditionFind', (req, res) => {
    console.log('query:' + req.query);
    const tel = req.query.tel;
    const sqlStr = 'select * from websites where tel=?';
    conn.query(sqlStr, tel, (err, results) => {
        if (err) return res.json({err_code: 1, message: '数据不存在', affextedRows: 0});
        res.json({err_code: 200, message: results, affextedRows: results.affextedRows});
    })
});

//添加
app.post('/api/add', (req, res) => {
    console.log(req.body);
    const data = req.body;
    const sqlStr = 'insert into websites set ?';
    conn.query(sqlStr, data, (err, results) => {
        if (err) return res.json({err_code: 1, message: err, affectedRows: 0});
        res.json({err_code: 0, message: '添加成功', affectedRows: results.affectedRows});
    })
});

//修改
app.post('/api/update', function (req, res) {
    console.log(req.body);
    const id = req.body.id;
    const name = req.body.name;
    const sqlStr = "update websites set name='" + name + "'where id=" + id;
    conn.query(sqlStr, (err, results) => {
        if (err) return res.json({err_code: 1, message: err, affectedRows: 0});
        res.json({err_code: 0, message: '修改成功', affectedRows: results.affectedRows});
    })
});

//删除
app.delete('/api/delete/:id', function (req, res) {
    console.log('params:' + req.params);
    let id = req.params.id;
    let sql = 'delete from websites where id=' + id;
    conn.query(sql, id, (err, results) => {
        if (err) return res.json({err_code: 1, message: err, affectedRows: 0});
        res.json({err_code: 0, message: '删除成功', affectedRows: results.affectedRows})
    })
});

//端口监听
app.listen(1234, () => {
    console.log('监听端口1234,http://localhost:1234');
});
