import { takeEvery, call, put, all } from 'redux-saga/effects';
import { DATA_REQUESTED, DATA_LOADED, API_ERRORED, FILM_LOADED, FILM_REQUESTED } from '../constants/actionTypes';

function* watcherSaga() {
    yield takeEvery(DATA_REQUESTED, workerSaga);
}

function* workerSaga() {
    try {
        const payload = yield call(getFilms);
        yield put({ type: DATA_LOADED, payload });
    } catch (event) {
        yield put({ type: API_ERRORED , payload: event });
    }
}

function* watcherFilmSaga() {
    yield takeEvery(FILM_REQUESTED, workerFilmSaga);
}

function* workerFilmSaga(action) {
    try {
        const payload = yield call(getFilm, action.payload);
        yield put({ type: FILM_LOADED, payload });
    } catch (event) {
        yield put({ type: API_ERRORED , payload: event });
    }
}

function* getFilms() {
    return fetch("http://localhost:3000/api/films/").then(response => response.json());
}

function* getFilm(payload) {
    const url = new URL("http://localhost:3000/api/films/");
    url.searchParams = new URLSearchParams({ id: payload })
    console.log(payload)
    return fetch("http://localhost:3000/api/films/").then(response => response.json());
}

export default function*() {
    const { }
};