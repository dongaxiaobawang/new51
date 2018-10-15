const m_user=require('../models/m_user.js')
//控制器模块
const showSignin=(req,res)=>{
	res.render('signin.html')
}
const handleSignin=(req,res)=>{
	const body=req.body
	m_user.checkEmail(body.email,(err,data)=>{
			if(err){
				// return res.send(err)
				return send({
					code:500,
					message:'服务器错误'
				})
			}
			if(!data[0]){
				return res.send({
					code:1,
					message:'用户名错误'
				})
			}
			if(data[0].password!=body.password){
				return res.send({
					code:2,
					message:'密码错误'
				})
			}
			res.send({
				code:200,
				message:'可以跳转了'
			})
	})
	// console.log(body)
	// const sql='select * from users where email=?'
	// db.query(sql,body.email,(err,data)=>{
	// 	if(err){
	// 		return res.send(err)
	// 	}
	// 	if(!data[0]){
	// 		return res.send('快去注册把')
	// 	}
	// 	if(body.password!==data[0].password){
	// 		return res.send('密码错误')
	// 	}
		//重定向
	// })

}
exports.showSignin=showSignin
exports.handleSignin=handleSignin