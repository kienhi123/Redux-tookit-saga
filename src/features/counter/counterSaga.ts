import { takeEvery, put, takeLatest, delay } from '@redux-saga/core/effects'
import { PayloadAction } from '@reduxjs/toolkit'
import { increment, incrementSaga, incrementSagaSuccess } from './counterSlice';


// export function* log(action: PayloadAction) {
//     console.log('Log', action)
// }
function* handleIncrementSaga(action: PayloadAction<number>) {
    console.log('Watting 2s');
    yield delay(1000)
    console.log('Watting done , dispatch action')

    yield put(incrementSagaSuccess(action.payload))
}

export default function* counterSaga() {
    console.log('counter Saga')
    yield takeEvery(incrementSaga.toString(), handleIncrementSaga);
    // yield takeLatest(incrementSaga.toString(), handleIncrementSaga);
}