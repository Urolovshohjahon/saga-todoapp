import { call, all, put, takeEvery } from 'redux-saga/effects';
import { login } from '../routines';
import TokenStorage from '../../../TokenStorage';

function* trigger(api, action) {
    const { request } = action.payload;
    // console.log(JSON.stringify(request));
    try {
        yield put(login.request());



        const response = yield call(api.user.login, request);

        yield all([
            put(
                login.success({
                    request,
                    response
                })
            )
        ])
    } catch (e) {
        console.log(e.message);
        yield put(login.failure(e))
    } finally {
        yield put(login.fulfill())
    }
}

export default function* (api) {
    yield takeEvery(login.TRIGGER, trigger, api)
}