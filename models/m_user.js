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
exports.checkEmail=checkEmail