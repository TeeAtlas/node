import express from 'express';
import { getFilms, getFilm, postFilm } from '../controllers/filmsController.js';


const filmsRouter = express.Router();


filmsRouter.get('/', getFilms);
filmsRouter.get('/:id', getFilm);
filmsRouter.post('/', postFilm);

export default filmsRouter;

