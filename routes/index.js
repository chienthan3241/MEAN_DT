var express = require('express');
var router = express.Router();
var _ = require('lodash');

var productIds = ['22330', '9911', '19372', '12902', '17923', '17067', '14018'];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Duc&Trang Blumen', bodyHeaderText: 'Home', navHome: 'active' });
});

router.get('/blumenimbund', function(req, res, next) {
  res.render('blumenimbund', { title: 'Duc&Trang Blumen', bodyHeaderText: 'Blumen im Bund', nav1: 'active', catalog: 'ctg1' });
});

router.get('/blumenstraeusse', function(req, res, next) {
  res.render('blumenstraeusse', { title: 'Duc&Trang Blumen', bodyHeaderText: 'Blumensträuße', nav2: 'active', catalog: 'ctg2' });
});

router.get('/blumenstraeusse/:id', function(req, res, next) {
  if (_.indexOf(productIds, req.params.id) === -1) {
    next();
  } else {
    res.render('detail', {
      title: 'Duc&Trang Blumen',
      bodyHeaderText: 'Blumensträuße',
      nav2: 'active',
      parentNav: 'blumenstraeusse',
      catalog: 'ctg2',
      id: req.params.id
    });
  }
});

router.get('/muttertag', function(req, res, next) {
  res.render('muttertag', { title: 'Duc&Trang Blumen', bodyHeaderText: 'Mutter Tag', navDrop: 'active', catalog: 'ctg3' });
});

router.get('/hochzeit', function(req, res, next) {
  res.render('hochzeit', { title: 'Duc&Trang Blumen', bodyHeaderText: 'Hochzeit', navDrop: 'active', catalog: 'ctg4' });
});

router.get('/geburt', function(req, res, next) {
  res.render('geburt', { title: 'Duc&Trang Blumen', bodyHeaderText: 'Geburt', navDrop: 'active', catalog: 'ctg5' });
});

router.get('/trauer', function(req, res, next) {
  res.render('trauer', { title: 'Duc&Trang Blumen', bodyHeaderText: 'Trauer', navDrop: 'active', catalog: 'ctg6' });
});

router.get('/liebe_romantik', function(req, res, next) {
  res.render('liebe_romantik', { title: 'Duc&Trang Blumen', bodyHeaderText: 'Liebe & Romantik', navDrop: 'active', catalog: 'ctg7' });
});

router.get('/glueckwunsch', function(req, res, next) {
  res.render('glueckwunsch', { title: 'Duc&Trang Blumen', bodyHeaderText: 'Glückwunsch', navDrop: 'active', catalog: 'ctg8' });
});

router.get('/dankeschoen', function(req, res, next) {
  res.render('dankeschoen', { title: 'Duc&Trang Blumen', bodyHeaderText: 'Dankeschön', navDrop: 'active', catalog: 'ctg9' });
});

router.get('/gute_besserung', function(req, res, next) {
  res.render('gute_besserung', { title: 'Duc&Trang Blumen', bodyHeaderText: 'Gute Besserung', navDrop: 'active', catalog: 'ctg10' });
});



module.exports = router;
