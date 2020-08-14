var express = require('express');
var router = express.Router();
// var validator = require('express-validator')

var addData = require('../controllers/addData')
var subTotal = require('../controllers/orderController')
var addkey = require('../controllers/orderController')

// var searchItems = require('../controllers/items/searchItems')
// var details = require('../controllers/items/details')
// var filterItems = require('../controllers/items/filterItems')
// var async = require('../controllers/items/async')
// var aggregate = require('../controllers/items/aggregate')



// router.use(validator());

/*  ROUTES */

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// POST method to add dummy data to the database
router.post('/addData', addData.addData);

// // GET method to get product list
router.get('/subTotal', subTotal.subTotal);

// // GET method to get product detail by product_id
// router.get('/details/:prodId', details.details);

// // POST method to search the items by word
router.get('/addkey', subTotal.addKey);

// // POST method to filter items
// router.post('/filterItems', filterItems.filterItems);

// // API using aggregate
// router.post('/aggregate', aggregate.aggregate);


// //async functionality
// router.post('/asyncWaterfall', async.asyncWaterfall);
// router.post('/asyncParallel', async.asyncParallel);



module.exports = router;
