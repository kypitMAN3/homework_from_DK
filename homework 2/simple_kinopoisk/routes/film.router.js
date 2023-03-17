const Router = require('../router');
const controller = require('../controllers/film.controller');

const router = new Router();

router.post('/film', controller.createFilm)