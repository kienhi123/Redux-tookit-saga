
import { all } from 'redux-saga/effects'
import authSaga from '../features/auth/authSaga'
import counterSaga from '../features/counter/counterSaga'

// eslint-disable-next-line require-yield

export default function* rootSaga() {

    yield all([counterSaga(), authSaga()])
}