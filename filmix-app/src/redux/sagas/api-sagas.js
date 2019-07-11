import { takeEvery, call, put, all } from 'redux-saga/effects';
import { 
    FILMS_REQUESTED, 
    FILMS_LOADED, 
    API_ERRORED, 
    FILM_LOADED, 
    FILM_REQUESTED,
} from '../constants/actionTypes';

 function* watcherFilmsSaga() {
    yield takeEvery(FILMS_REQUESTED, workerFilmsSaga);
}

function* workerFilmsSaga(action) {
    try {
        const payload = yield call(getAllFilms, action.payload);
        yield put({ type: FILMS_LOADED, payload });
    } catch (event) {
        yield put({ type: API_ERRORED , payload: event });
    }
}

function getAllFilms(payload) {
    return fetch(`http://localhost:3000/api/films?pageNo=${payload}&size=27`).then(response => {
        return response.json()
    });
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

function getFilm(payload) {
    return fetch(`http://localhost:3000/api/films/${payload}`).then(response => response.json());
}

export default function*() {
    yield all([
        watcherFilmsSaga(),
        watcherFilmSaga(),
    ]);
};