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

router.get('/muttertag', function(req, res, next) {
  res.render('muttertag', { title: 'Duc&Trang Blumen', bodyHeaderText: 'Mutter Tag', navDrop: 'active' });
});

router.get('/hochzeit', function(req, res, next) {
  res.render('hochzeit', { title: 'Duc&Trang Blumen', bodyHeaderText: 'Hochzeit', navDrop: 'active' });
});

router.get('/geburt', function(req, res, next) {
  res.render('geburt', { title: 'Duc&Trang Blumen', bodyHeaderText: 'Geburt', navDrop: 'active' });
});

module.exports = router;
