//路由模块
const express=require('express')
//配置router
const router=express.Router()
//导入函数
const c_user=require('./controllers/c_user.js')
const c_topic=require('./controllers/c_topic.js')
//3监听请求
//渲染登录页请求
router.get('/signin',c_user.showSignin)
//监听登陆表单请求
router.post('/signin',c_user.handleSignin)
//渲染话题页请求
router.get('/',c_topic.showTopic)
module.exports=router