//导入数据库
const db=require('../tools/db_config.js')
//验证邮箱
const checkEmail=(email,callback)=>{
	const sql='select * from users where email=?'
	db.query(sql,email,(err,data)=>{
		if(err){
			return callback(err,null)
		}
		return callback(null,data)
	})
}
exports.checkSignupNickname=(nickname,callback)=>{
	const sql='select * from users where nickname=?'
	db.query(sql,nickname,(err,data)=>{
		if(err){
			return callback(err)
		}
		return callback(null,data)
	})
}
exports.addUser=(body,callback)=>{
	const sql='insert into users set?'
	db.query(sql,body,(err,data)=>{
		if(err){
			return callback(err)
		}
		return callback(null,data)
	})
}
exports.checkEmail=checkEmail