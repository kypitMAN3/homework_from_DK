const Router = require('express');
const controller = require('../controllers/genre.controller');

const router = new Router();


router.post('/genre', controller.createGenre);
router.get('/genre', controller.getGenres);
router.get('/genre/:id', controller.getOneGenre);
router.put('/genre', controller.updateGenre);
router.delete('/genre/:id', controller.deleteGenre);

module.exports = router;