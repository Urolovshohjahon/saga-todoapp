import { call, all, put, takeEvery } from 'redux-saga/effects';

import TokenStorage from '../../../TokenStorage';
import { getTaskById } from '../routines';

function* trigger(api, action) {
    const { request } = action.payload;
    // console.log(JSON.stringify(request));
    try {
        yield put(getTaskById.request());

        const currentToken = yield call(TokenStorage.get);
        console.log("Bu joriy token------------------", currentToken);

        if (currentToken) {
            yield call(api.setToken, currentToken);
            console.log("Token mavjud");
        }

        const response = yield call(api.filemanager.getTaskById, request);
        //console.log(JSON.stringify(response.data));
        yield all([
            put(
                getTaskById.success({
                    request,
                    response
                })
            )
        ])



    }
    catch (e) {
        console.log("Get Tasks by id ishlamayapti:", e)
        yield put(getTaskById.failure(e))
    }
    finally {
        yield put(getTaskById.fulfill())
    }
}

export default function* (api) {
    yield takeEvery(getTaskById.TRIGGER, trigger, api)
}