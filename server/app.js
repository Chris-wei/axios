const Koa = require('koa');
const KoaRouter = require('koa-router')
const bodyParser = require('koa-bodyparser')

const app = new Koa();

app.use(bodyParser())

app.use(async (ctx, next) => {
	ctx.set('Access-Control-Allow-Origin', '*');
	ctx.set('Access-Control-Allow-Headers', 'content-type,token,accept');
	ctx.set('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
	ctx.set("Content-Type", "application/json")
	ctx.set('Access-Control-Max-Age', 10)
	//处理 options
	if (ctx.request.method.toLowerCase() === 'options'){
		ctx.response.status = 200;
		ctx.body = '';
	} else await next();
})

const router = new KoaRouter();

router.get('/', async ctx => {
	ctx.body = {
		data: 'Hello World'
	}
})

router.get('/user/info', async ctx => {
	ctx.body = {
		name: 'Chris',
		msg: 'Hello World'
	}
})

router.post('/user/add',async ctx=>{
	ctx.body = {
		errCode : 0,
		errMsg : 'ok' ,
		data : {
			account : ctx.request.body.account ,
			password : ctx.request.body.password
		}
	}
})

app.use(router.routes());

app.listen(3000, function () {
	console.log('app is running ~')
})
