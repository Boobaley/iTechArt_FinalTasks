import { takeEvery, call, put, all } from 'redux-saga/effects';
import { 
    FILMS_REQUESTED, 
    FILMS_LOADED, 
    API_ERRORED, 
    FILM_LOADED, 
    FILM_REQUESTED, 
    USERNAME_REQUESTED, 
    USERNAME_RECEIVED 
} from '../constants/actionTypes';

 function* watcherFilmsSaga() {
    yield takeEvery(FILMS_REQUESTED, workerFilmsSaga);
}

function* workerFilmsSaga() {
    try {
        const payload = yield call(getAllFilms);
        yield put({ type: FILMS_LOADED, payload });
    } catch (event) {
        yield put({ type: API_ERRORED , payload: event });
    }
}

function getAllFilms() {
    return fetch("http://localhost:3000/api/films/").then(response => response.json());
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

function* watcherUserSaga() {
    yield takeEvery(USERNAME_REQUESTED, workerUserSaga);
}

function* workerUserSaga() {
    try {
        const payload = yield call(getUserName);
        yield put({ type: USERNAME_RECEIVED, payload });
    } catch (event) {
        yield put({ type: API_ERRORED , payload: event });
    }
}

function getUserName() {
    const options = {
        headers: { 
            Authorization: localStorage.getItem('Token')
         }
    }
    return fetch(`http://localhost:3000/api/getusername`, options).then(response => response.json());
}

export default function*() {
    yield all([
        watcherFilmsSaga(),
        watcherFilmSaga(),
        watcherUserSaga()
    ]);
};