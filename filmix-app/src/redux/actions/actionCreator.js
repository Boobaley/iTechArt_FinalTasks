import { FILMS_REQUESTED } from '../constants/actionTypes';
export function getAllFilms() {
    return { type: FILMS_REQUESTED };
};

export function getFilm(payload) {
    return { type: "FILM_REQUESTED", payload }
}