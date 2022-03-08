import { call, all, put, takeEvery } from 'redux-saga/effects';

import TokenStorage from '../../../TokenStorage';
import { getAllTasks } from '../routines';

function* trigger(api, action) {
    const { request } = action.payload;
    // console.log(JSON.stringify(request));
    try {
        yield put(getAllTasks.request());

        const currentToken = yield call(TokenStorage.get);
        console.log("Bu joriy token------------------", currentToken);

        if (currentToken) {
            yield call(api.setToken, currentToken);
            console.log("Token mavjud");
        }

        const response = yield call(api.filemanager.getAllTasks, request);
        //console.log(JSON.stringify(response.data));
        yield all([
            put(
                getAllTasks.success({
                    request,
                    response
                })
            )
        ])



    }
    catch (e) {
        console.log("Get Tasks ishlamayapti:",e)
        yield put(getAllTasks.failure(e))
    }
    finally {
        yield put(getAllTasks.fulfill())
    }
}

export default function* (api) {
    yield takeEvery(getAllTasks.TRIGGER, trigger, api)
}