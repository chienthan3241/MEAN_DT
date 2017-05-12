var express = require('express');
var router = express.Router();
var _ = require('lodash');

var productIds = [
  {
    id: "22330",
    tags: "bs;ctg2;ctg3;ctg4;ctg5;ctg7;ctg9"
  },
  {
    id: "9911",
    tags: "bs;ctg1;ctg2;ctg3;ctg5;ctg7;ctg8;ctg10",
  },
  {
    id: "19372",
    tags: "ctg1;ctg3;ctg4;ctg7;ctg8",
  },
  {
    id: "12902",
    tags: "bs;ctg1;ctg2;ctg3;ctg5;ctg7;ctg10",
  },
  {
    id: "17923",
    tags: "bs;ctg1;ctg2;ctg3;ctg8;ctg9;ctg10",
  },
  {
    id: "17067",
    tags: "bs;ctg1;ctg2;ctg8;ctg10"
  },
  {
    id: "14018",
    tags: "bs;ctg1;ctg2;ctg4;ctg6"
  }
];

// validate link /Url
var validatePath = function (id, ctg) {
    if (_.findIndex(productIds, {id: id}) === -1) {
      return false;
    } else {
      var ctgArray = _.split(productIds[_.findIndex(productIds, {id: id})].tags, ';');
      if (_.indexOf(ctgArray, ctg) === -1) {
        return false;
      } else {
        return true;
      }
    }
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Duc&Trang Blumen', bodyHeaderText: 'Home', navHome: 'active' });
});

//catalog 1 & detail (ctg1 => blumenimbund)
router.get('/blumenimbund', function(req, res, next) {
  res.render('blumenimbund', { title: 'Duc&Trang Blumen', bodyHeaderText: 'Blumen im Bund', nav1: 'active', catalog: 'ctg1' });
});

router.get('/blumenimbund/:id', function(req, res, next) {
  if (!validatePath(req.params.id, 'ctg1')) {
    next();
  } else {
    res.render('detail', {
      title: 'Duc&Trang Blumen',
      bodyHeaderText: 'Blumen im Bund',
      nav1: 'active',
      parentNav: 'blumenimbund',
      catalog: 'ctg1',
      id: req.params.id
    });
  }
});

//catalog 2 & detail (ctg2 => blumenstraeusse)
router.get('/blumenstraeusse', function(req, res, next) {
  res.render('blumenstraeusse', { title: 'Duc&Trang Blumen', bodyHeaderText: 'Blumensträuße', nav2: 'active', catalog: 'ctg2' });
});

router.get('/blumenstraeusse/:id', function(req, res, next) {
  if (!validatePath(req.params.id, 'ctg2')) {
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

//catalog 3 & detail (ctg3 => muttertag)
router.get('/muttertag', function(req, res, next) {
  res.render('muttertag', { title: 'Duc&Trang Blumen', bodyHeaderText: 'Mutter Tag', navDrop: 'active', catalog: 'ctg3' });
});

router.get('/muttertag/:id', function(req, res, next) {
  if (!validatePath(req.params.id, 'ctg3')) {
    next();
  } else {
    res.render('detail', {
      title: 'Duc&Trang Blumen',
      bodyHeaderText: 'Mutter Tag',
      navDrop: 'active',
      parentNav: 'muttertag',
      catalog: 'ctg3',
      id: req.params.id
    });
  }
});

//catalog 4 & detail (ctg4 => hochzeit)
router.get('/hochzeit', function(req, res, next) {
  res.render('hochzeit', { title: 'Duc&Trang Blumen', bodyHeaderText: 'Hochzeit', navDrop: 'active', catalog: 'ctg4' });
});

router.get('/hochzeit/:id', function(req, res, next) {
  if (!validatePath(req.params.id, 'ctg4')) {
    next();
  } else {
    res.render('detail', {
      title: 'Duc&Trang Blumen',
      bodyHeaderText: 'Hochzeit',
      navDrop: 'active',
      parentNav: 'hochzeit',
      catalog: 'ctg4',
      id: req.params.id
    });
  }
});

//catalog 5 & detail (ctg5 => geburt)
router.get('/geburt', function(req, res, next) {
  res.render('geburt', { title: 'Duc&Trang Blumen', bodyHeaderText: 'Geburt', navDrop: 'active', catalog: 'ctg5' });
});

router.get('/geburt/:id', function(req, res, next) {
  if (!validatePath(req.params.id, 'ctg5')) {
    next();
  } else {
    res.render('detail', {
      title: 'Duc&Trang Blumen',
      bodyHeaderText: 'Geburt',
      navDrop: 'active',
      parentNav: 'geburt',
      catalog: 'ctg5',
      id: req.params.id
    });
  }
});

//catalog 6 & detail (ctg6 => trauer)
router.get('/trauer', function(req, res, next) {
  res.render('trauer', { title: 'Duc&Trang Blumen', bodyHeaderText: 'Trauer', navDrop: 'active', catalog: 'ctg6' });
});

router.get('/trauer/:id', function(req, res, next) {
  if (!validatePath(req.params.id, 'ctg6')) {
    next();
  } else {
    res.render('detail', {
      title: 'Duc&Trang Blumen',
      bodyHeaderText: 'Trauer',
      navDrop: 'active',
      parentNav: 'trauer',
      catalog: 'ctg6',
      id: req.params.id
    });
  }
});

//catalog 7 & detail (ctg7 => liebe_romantik)
router.get('/liebe_romantik', function(req, res, next) {
  res.render('liebe_romantik', { title: 'Duc&Trang Blumen', bodyHeaderText: 'Liebe & Romantik', navDrop: 'active', catalog: 'ctg7' });
});

router.get('/liebe_romantik/:id', function(req, res, next) {
  if (!validatePath(req.params.id, 'ctg7')) {
    next();
  } else {
    res.render('detail', {
      title: 'Duc&Trang Blumen',
      bodyHeaderText: 'Liebe & Romantik',
      navDrop: 'active',
      parentNav: 'liebe_romantik',
      catalog: 'ctg7',
      id: req.params.id
    });
  }
});

//catalog 8 & detail (ctg8 => glueckwunsch)
router.get('/glueckwunsch', function(req, res, next) {
  res.render('glueckwunsch', { title: 'Duc&Trang Blumen', bodyHeaderText: 'Glückwunsch', navDrop: 'active', catalog: 'ctg8' });
});

router.get('/glueckwunsch/:id', function(req, res, next) {
  if (!validatePath(req.params.id, 'ctg8')) {
    next();
  } else {
    res.render('detail', {
      title: 'Duc&Trang Blumen',
      bodyHeaderText: 'Glückwunsch',
      navDrop: 'active',
      parentNav: 'glueckwunsch',
      catalog: 'ctg8',
      id: req.params.id
    });
  }
});

//catalog 9 & detail (ctg9 => glueckwunsch)
router.get('/dankeschoen', function(req, res, next) {
  res.render('dankeschoen', { title: 'Duc&Trang Blumen', bodyHeaderText: 'Dankeschön', navDrop: 'active', catalog: 'ctg9' });
});

router.get('/dankeschoen/:id', function(req, res, next) {
  if (!validatePath(req.params.id, 'ctg9')) {
    next();
  } else {
    res.render('detail', {
      title: 'Duc&Trang Blumen',
      bodyHeaderText: 'Dankeschön',
      navDrop: 'active',
      parentNav: 'dankeschoen',
      catalog: 'ctg9',
      id: req.params.id
    });
  }
});

//catalog 10 & detail (ctg10 => glueckwunsch)
router.get('/gute_besserung', function(req, res, next) {
  res.render('gute_besserung', { title: 'Duc&Trang Blumen', bodyHeaderText: 'Gute Besserung', navDrop: 'active', catalog: 'ctg10' });
});

router.get('/gute_besserung/:id', function(req, res, next) {
  if (!validatePath(req.params.id, 'ctg10')) {
    next();
  } else {
    res.render('detail', {
      title: 'Duc&Trang Blumen',
      bodyHeaderText: 'Gute Besserung',
      navDrop: 'active',
      parentNav: 'gute_besserung',
      catalog: 'ctg10',
      id: req.params.id
    });
  }
});


module.exports = router;
