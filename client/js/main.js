import axios from './axios'

//默认配置
axios.defaults.baseURL = 'http://127.0.0.1:3000';


//请求拦截器
axios.interceptors.request.use(config=>{
	console.log('请求配置信息：',config);
	return config
})

axios.interceptors.request.use(config=>{
	config.headers.token = 'x-token-654321';
	return config
})

//响应拦截器
axios.interceptors.response.use(res=>{
	console.log('请求响应信息',res)
	return res;
})

axios.interceptors.response.use(res=>{
	res.msg = 'request is ok ~';
	return res;
})


axios.get('/user/info',{
	headers : {
		token : 'x-token-123456'
	}
}).then(res=>{
	console.log(res);
})


axios.post('/user/add',{
	account : 'admin' ,
	password : 'admin'
}).then(res=>{
	console.log(res);
})
