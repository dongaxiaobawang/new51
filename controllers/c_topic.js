const m_topic=require('../models/m_topic.js')
//导入moment
const moment=require('moment')
exports.showTopic=(req,res)=>{
	m_topic.findAllTopic((err,data)=>{
		if(err){
			return res.render({
				code:500,
				message:'服务器错误'
			})
		}
		// console.log(data)
		
		res.render('index.html',{topic:data,user:req.session.user})

	})
	
}
exports.createTopic=(req,res)=>{
	res.render('topic/create.html')
}
exports.handleCreateTopic=(req,res)=>{
	const body =req.body
	body.createdAt=moment().format()
	body.userId=req.session.user.id
	// console.log(body)
	m_topic.addTopic(body,(err,data)=>{
		if(err){
			return res.send({
				code:500,
				message:'服务器错误'
			})
		}
		res.send({
			code:200,
			message:'添加成功'
		})

	})
}
exports.showDetail=(req,res)=>{
	const topicID=req.params.topicID
	// console.log(topicID)
	const userId=req.session.user.id
	m_topic.findTopicById(topicID,(err,data)=>{
		if(err){
			return res.send({
				code:500,
				message:'服务器错误'
			})
		}
		
		res.render('topic/show.html',{topic:data[0],userId:userId})

	})
	
}
exports.showEdit=(req,res)=>{
	const topicID=req.params.topicID
	m_topic.findTopicById(topicID,(err,data)=>{
		if(err){
			return res.send({
				code:500,
				message:'服务器错误'
			})
		}
		
		res.render('topic/edit.html',{topic:data[0]})

	})
}
exports.updateTopic=(req,res)=>{
	const topicID=req.params.topicID
	const body=req.body
	console.log(topicID,body)
	m_topic.updateTopicById(topicID,body,(err,data)=>{
			if(err){
				console.log(err)
				return res.send({
					code:500,
					message:err.message
				})
			}
			res.send({
				code:200,
				message:'成功修改'
			})
	})
}
exports.deleteTopic=(req,res)=>{
	const topicID=req.params.topicID
	m_topic.deleteTopicById(topicID,(err,data)=>{
		if(err){
				return res.send({
					code:500,
					message:err.message
				})
			}
			res.send({
				code:200,
				message:'成功删除'
			})
	})
}
