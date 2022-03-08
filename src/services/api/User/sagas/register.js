import { call, all, put, takeEvery } from 'redux-saga/effects';
import { register } from '../routines';
import TokenStorage from '../../../TokenStorage';

function* trigger(api, action) {
    const { request } = action.payload;
    // console.log(JSON.stringify(request));
    try {
        yield put(register.request());



        const response = yield call(api.user.register, request);

        yield all([
            put(
                register.success({
                    request,
                    response
                })
            )
        ])
    } catch (e) {
        console.log('e');
        yield put(register.failure(e))
    } finally {
        yield put(register.fulfill())
    }
}

export default function* (api) {
    yield takeEvery(register.TRIGGER, trigger, api)
}