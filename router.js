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
//渲染发布话题页请求
router.get('/topic/create',c_topic.createTopic)
// 发布页提交表单请求
router.post('/createTopic',c_topic.handleCreateTopic)
//退出发布标题页
router.get('/signout',c_user.handleSignout)
//动态路由
router.get('/topic/:topicID',c_topic.showDetail)
//动态路由编辑按钮
router.get('/topic/:topicID/edit',c_topic.showEdit)
// 动态路由编辑提交表单
router.post('/topic/edit/:topicID',c_topic.updateTopic)
//动态路由删除标题
router.get('/topic/:topicID/delete',c_topic.deleteTopic)
//渲染注册页面
router.get('/signup',c_user.showSignup)
//注册页面表单提交
router.post('/signup',c_user.checkSignup)
module.exports=router