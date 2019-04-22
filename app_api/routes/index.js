var express = require('express');
var router = express.Router();
var ctrlWord = require('../controllers/words');
/* Backend */

// Read All
router.get('/words', ctrlWord.readAll);

// Read By ID
//router.get('/herb/:herbid', ctrlWord.HerbReadOne);

// Create new entry
//router.post('/herb', ctrlWord.HerbCreate);

// Updating entry by ID
//router.put('/herb/:herbid', ctrlWord.HerbUpdate)

// Delete entry by ID
//router.delete('/herb/:herbid', ctrlWord.HerbDelete)

//router.post('/herb/:herbid', ctrlWord.addMedicinalProperties);


module.exports = router;
