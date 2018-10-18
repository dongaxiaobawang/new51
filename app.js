//程序入口文件

//1 导包
const express=require('express')
//2 app对象
const app=express()
// 导入router
const router=require('./router.js')
//导入body-parser
const bodyParser=require('body-parser')
//导入express-session
const session=require('express-session')
//导入express-mysql-session
const MySQLStore = require('express-mysql-session')(session);
//配置express-mysql-session
const options = {
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'root',
	database: 'news51'
};
const sessionStore = new MySQLStore(options);
//处理静态资源
app.use('/public',express.static('./public'))
app.use('/node_modules',express.static('./node_modules'))
//配置包
app.engine('html', require('express-art-template'));
app.use(bodyParser.urlencoded({ extended: false }));
//配置express-mysql-session/express-session
app.use(session({
	key: 'session_cookie_name',
	secret: 'session_cookie_secret',
	store: sessionStore,
	resave: false,
	saveUninitialized: false
}));
//调用router在端口上边
app.use(router)
//4绑定端口
app.listen(12345,(err)=>{
	console.log("绑定成功")
})