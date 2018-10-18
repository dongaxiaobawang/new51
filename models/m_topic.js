const db=require('../tools/db_config.js')
exports.findAllTopic=(callback)=>{
	const sql='select * from topics order by createdAt desc'
	db.query(sql,(err,data)=>{
		if(err){
			return callback(err)
		}
		return callback(null,data)
	})
}
exports.addTopic=(body,callback)=>{
	const sql='insert into topics set ?'
	db.query(sql,body,(err,data)=>{
		if(err){
			return callback(err)
		}
		return callback(null,data)
	})
}
exports.findTopicById=(topicID,callback)=>{
	const sql='select * from topics where id=?'
	db.query(sql,topicID,(err,data)=>{
		if(err){
			return callback(err)
		}
		return callback(null,data)
	})
}
exports.updateTopicById=(topicID,body,callback)=>{
	const sql='update topics set title=?,content=? where id=?'
	db.query(sql,[body.title,body.content,topicID],(err,data)=>{
		console.log(1)
		if(err){
			return callback(err)
		}
		return callback(null,data)
	
	})
}
exports.deleteTopicById=(topicID,callback)=>{
	const sql='delete from topics where id=?'
	db.query(sql,topicID,(err,data)=>{
		if(err){
			return callback(err)
		}
		return callback(null,data)
	})
}