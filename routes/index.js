var express = require('express');
var router = express.Router();


var Index = require('../app/controllers/index_controller');
//var Chat= require('../app/controllers/chat_controller');

router.get('/',Index.enter);
router.get('/index',Index.enter);

router.get('/about',Index.about);


router.get('/service',Index.service);


router.get('/news',Index.news);



router.get('/contact',Index.contact);


router.get('/elements',Index.elements);


router.get('/indexicons',Index.indexicons);


router.get('/logout',Index.logout);
router.get('/profile',Index.profile)

router.get('/finddonor',Index.finddonor);

exports = module.exports =router;

