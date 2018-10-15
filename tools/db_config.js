// 1. 导包
const mysql = require('mysql');
// 2. 配置mysql
const db = mysql.createConnection({
    host: 'localhost', // 要连接的主机名
    user: 'root', // 要连接的数据库的用户名
    password: 'root', // 数据库密码
    database: 'news51' // 数据库
});
module.exports=db;