const express = require('express');
const genreRouter = require('./routes/genre.router');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use('/api', genreRouter);



app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))