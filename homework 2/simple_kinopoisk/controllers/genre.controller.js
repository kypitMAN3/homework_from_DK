const db = require('../db');

class GenreController {
    async createGenre(req, res) {
        const {genre_name} = req.body;
        console.log(genre_name);
        res.json('ok')
    }

    async getGenres(req, res) {
        

    }

    async getOneGenre(req, res) {
        
    }

    async updateGenre(req, res) {
        
    }

    async deleteGenre(req, res) {
        
    }
}

module.exports = GenreController;