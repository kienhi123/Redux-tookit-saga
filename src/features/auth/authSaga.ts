import { PayloadAction } from "@reduxjs/toolkit";
import { call, delay, fork, put, take } from "redux-saga/effects";
import { authActions, LoginPayload } from "./authSlice";

function* handleLogin(payload: LoginPayload) {
    try {
        console.log('handle login', payload)
        yield delay(500)
        localStorage.setItem('access_token', 'fake_token')
        yield put(
            authActions.loginSuccess({
                id: 1,
                name: "Front end",
            })
        );
    } catch (error) {
        console.log(' failed', error);
    }
}

function* handleLogout() {
    console.log('handle logout')
    localStorage.removeItem('access_token')
}

function* watchLoginFlow() {
    while (true) {
        console.log('Watch login')
        const isLoggedIn = Boolean(localStorage.getItem('access_token'));
        if (!isLoggedIn) {
            const action: PayloadAction<LoginPayload> = yield take(authActions.login.type)
            yield fork(handleLogin, action.payload)
        }
        yield take(authActions.logout.type)
        yield call(handleLogout)
    }
}
export default function* authSaga() {
    yield fork(watchLoginFlow)
}