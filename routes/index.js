var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Duc&Trang Blumen', bodyHeaderText: 'Home', navHome: 'active' });
});

router.get('/blumenstraeusse', function(req, res, next) {
  res.render('blumenstraeusse', { title: 'Duc&Trang Blumen', bodyHeaderText: 'Blumensträuße', nav2: 'active' });
});

router.get('/blumenstraeusse/:id', function(req, res, next) {
  res.render('index', { title: 'Duc&Trang Blumen', bodyHeaderText: 'Blumensträuße' });
});

router.get('/blumenimbund', function(req, res, next) {
  res.render('blumenimbund', { title: 'Duc&Trang Blumen', bodyHeaderText: 'Blumen im Bund', nav1: 'active' });
});

module.exports = router;
