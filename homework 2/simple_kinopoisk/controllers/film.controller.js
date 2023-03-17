const db = require('../db');

class FilmController {
    async createFilm(req, res) {
        const {name, premier_date} = req.body;
        const newFilm = await db.query("INSERT INTO film (name, premier_date) values ($1, $2) RETURNING *", [name, premier_date]);

        res.json(newFilm);
    }

    async getFilms(req, res) {
        let films;

    }

    async getOneFilm(req, res) {
        
    }

    async updateFilm(req, res) {
        
    }

    async deleteFilm(req, res) {
        
    }
}

module.exports = FilmController;