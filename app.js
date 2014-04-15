var app = require( 'express' )();
var ModelProxy = require( './lib/modelproxy' );

// 初始化modelproxy接口文件
ModelProxy.init( './interface.json' );

// 配置拦截器，浏览器端可通过访问 127.0.0.1/model/[interfaceId]
app.use( '/model/', ModelProxy.Interceptor );

app.get( '/api/v2/index', function( req, res){
  var recommendModel = ModelProxy.create('Recommend.index');
  recommendModel.index({
    userId: 'dsadas',
    his: '-',
    size: 10,
    direction: 'down',
    lastId: '-',
    seq: '-'
  })
  .done( function(data){
    res.send(data)
  })
})

app.get( '/api/v2/channels/:channel_id', function( req, res){
  var recommendModel = ModelProxy.create('Recommend.channel');
  recommendModel.channel({
    type: channel_id,
    userId: 'dsadas',
    his: '-',
    size: 10,
    direction: 'down',
    lastId: '-',
    seq: '-'
  })
  .done( function(data){
    res.send(data)
  })
})

app.get( '/api/v2/articles/:aid', function( req, res){
  var recommendModel = ModelProxy.create('Recommend.detail');
  recommendModel.detail({
    ids: req.params.aid,
    seq: '-'
  })
  .done( function(data){
    res.send(data)
  })
})

app.get( '/api/v2/about/:aid', function( req, res){
  var recommendModel = ModelProxy.create('Recommend.about');
  recommendModel.about({
    articleId: req.params.aid,
    userId: "dsdsdsds",
    seq: '-'
  })
  .done( function(data){
    res.send(data)
  })
})

app.listen( 3000 );

console.log( 'port: 3000' );