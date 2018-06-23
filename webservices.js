const express= require('express');
let app =express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

let port = process.env.PORT || 4000;
let router = express.Router();

let db = ["laura", "antonio","pedrio","brenda"];

router.get('/getNames', function(req, res){
  res.json({message:db});
})
router.get('/getNamesById/:id', function(req,res){
  res.json({ message:db[req.params.id]});
});
router.post('/addName/:variable', function(req,res){
  //res.json(message: req.params.variable)
  db.push(req.params.variable);
  res.jason({message:db});
})
app.use('/api', router);
app.listen(port, function(){
  console.log("SERVER ESCUCHANDO EN PUERTO" + port)
});
