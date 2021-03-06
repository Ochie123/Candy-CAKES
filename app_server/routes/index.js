var express = require('express');
var router = express.Router();
const ctrlCakes = require('../controllers/cakes');
const ctrlGifts = require('../controllers/gifts');
const ctrlOurAnniversary = require('../controllers/ourAnniversary');
const ctrlSurprise = require('../controllers/surprise');
const ctrlOthers = require('../controllers/others');
/* Location pages. */
router.get('/', ctrlCakes.homelist);
router.get('/gifts', ctrlGifts.gifts);
router.get('/surprise', ctrlSurprise.surprise);
router.get('/cakes', ctrlCakes.cakeInfo);
router.get('/ourAnniversary', ctrlOurAnniversary.ourAnniversary);
router.get('/cake/review/new', ctrlCakes.addReview);
/* Other pages */
router.get('/about', ctrlOthers.about);
module.exports = router;
