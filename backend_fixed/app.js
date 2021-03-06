const Koa = require('koa');
const KoaRouter = require('koa-router');
const serve = require('koa-static')
const cors = require('@koa/cors');
const jsonfile = require('jsonfile');

const app = new Koa();
const router = new KoaRouter();
const supportedCategories = ['restaurants', 'snacks', 'wonders', 'gifts']
const responseHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
  'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS'
  }

router.get('/', (ctx, next) => {
  ctx.body = 'Hello there!';
});

router.get('/categories', (ctx, next) => {
  let file = './files/categories.json'
  ctx.body = jsonfile.readFileSync(file)
  ctx.set(responseHeaders)
})

router.get('/stores', (ctx, next) => {

  let query = ctx.query
  if (!query || !query.category) {
    ctx.status = 400
    ctx.body = 'Wrong query'
    return
  }

  let category = query.category.toLowerCase()
  if (!supportedCategories.includes(category)) {
    ctx.status = 404
    ctx.body = 'Wrong category'
    return
  }

  let file = `./files/${category}.json`
  ctx.body = jsonfile.readFileSync(file)  
  ctx.set(responseHeaders)
})

app
  .use(serve(__dirname + '/public'))
  .use(router.routes())
  .use(cors())
  .use(async ctx => {
    ctx.body = 'Hello World';
  });

app.listen(3000, (err) => {
  console.log(`listening to port 3000`)
});
