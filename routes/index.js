var express = require('express');
var router = express.Router();
const {getProudct}=require('../controller/userController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.get('/products',getProudct)

module.exports = router;
