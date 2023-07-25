var express = require('express');
var router = express.Router();

router.use((req,res,next)=>{
  console.log("Middleware")
  next()
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',location:'Pune' });
});
router.post('/', function(req, res) {
  // res.send("Hello")
  // res.send(req.body)
  // res.send(req.body.tid)
  res.render('index',{title:'CDAC',ID:req.body.tid,username:req.body.name,Age:req.body.age})
});

let middlewarefun=(req,res,next)=>{
  console.log("Middleware called")
  next()
}
router.get('/form',middlewarefun, function(req, res) {
  res.render('form');
}); 


router.get('/getform', function(req, res) {
  res.render('getform');
});
router.get('/getformdata', function(req, res) {
  // res.send('Hello');
  // res.send(req.query);
  res.render('index',{title:'CDAC',ID:req.query.tid,username:req.query.name,Age:req.query.age})
});
module.exports = router;
