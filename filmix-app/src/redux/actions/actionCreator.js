import { FILMS_REQUESTED, FILM_REQUESTED } from '../constants/actionTypes';

export function getAllFilms(payload) {
    return { type: FILMS_REQUESTED, payload };
};

export function getFilm(payload) {
    return { type: FILM_REQUESTED, payload }
};