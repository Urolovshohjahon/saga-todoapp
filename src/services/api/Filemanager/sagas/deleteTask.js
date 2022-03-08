import { call, all, put, takeEvery } from 'redux-saga/effects';

import TokenStorage from '../../../TokenStorage';
import { deleteTask } from '../routines';

function* trigger(api, action) {
    const { request } = action.payload;
    // console.log(JSON.stringify(request));
    try {
        yield put(deleteTask.request());

        const currentToken = yield call(TokenStorage.get);
        console.log("Bu joriy token------------------", currentToken);

        if (currentToken) {
            yield call(api.setToken, currentToken);
            console.log("Token mavjud");
        }

        const response = yield call(api.filemanager.deleteTask, request);
        //console.log(JSON.stringify(response.data));
        yield all([
            put(
                deleteTask.success({
                    request,
                    response
                })
            )
        ])



    }
    catch (e) {
        console.log("Get Tasks ishlamayapti:",e)
        yield put(deleteTask.failure(e))
    }
    finally {
        yield put(deleteTask.fulfill())
    }
}

export default function* (api) {
    yield takeEvery(deleteTask.TRIGGER, trigger, api)
}