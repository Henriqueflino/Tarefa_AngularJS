var router = require('./router');

var app = router(3001);

var operadoras = [
  {nome: "Oi", codigo: 14, categoria: "Celular", preco: 2},
  {nome: "Vivo", codigo: 15, categoria: "Fixo", preco: 1},
  {nome: "Tim", codigo: 41, categoria: "Celular", preco: 3},
  {nome: "Claro", codigo: 18, categoria: "Fixo", preco: 2},
  {nome: "Embratel", codigo: 27, categoria: "Fixo", preco: 1},
  {nome: "Laricell", codigo: 66, categoria: "Celular", preco: 3}
];

var contatos = [
  {id: 1, nome: "Bruno", telefone: "9999-2222", data: new Date(), operadora: operadoras[5]},
  {id: 2, nome: "Sandra", telefone: "9999-3333", data: new Date(), operadora: operadoras[1]},
  {id: 3, nome: "Mariana", telefone: "92039-9999", data: new Date(), operadora: operadoras[2]},
  {id: 4, nome: "Henrique", telefone: "5296-5455", data: new Date(), operadora: operadoras[3]},
  {id: 5, nome: "Estrevaldo", telefone: "92239-3333", data: new Date(), operadora: operadoras[5]},
  {id: 6, nome: "Ueslingtonw", telefone: "95239-9999", data: new Date(), operadora: operadoras[4]}
];

app.interceptor(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.interceptor(function (req, res, next) {
  res.setHeader('Content-Type', 'application/json;charset=UTF-8');
  next();
});

app.get('/operadoras', function (req, res) {
  res.write(JSON.stringify(operadoras));
  res.end();
});

app.get('/contatos', function (req, res) {
  res.write(JSON.stringify(contatos));
  res.end();
});

app.post('/contatos', function (req, res) {
  var contato = req.body;
  contatos.push(JSON.parse(contato));
  res.end();
});

app.post('/file', function (req, res) {
  console.log(req.body);
  res.end();
});

app.options('/file', function (req, res) {
  res.end();
});

app.options('/contatos', function (req, res) {
  res.end();
});