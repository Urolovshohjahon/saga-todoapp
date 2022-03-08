import { call, all, put, takeEvery } from 'redux-saga/effects';
import TokenStorage from '../../../TokenStorage';
import { addTask } from '../routines';

function* trigger(api, action) {
    const { request } = action.payload;
    // console.log(JSON.stringify(request));
    try {
        yield put(addTask.request());

        const currentToken = yield call(TokenStorage.get);
        console.log("Bu joriy token------------------", currentToken);

        if (currentToken) {
            yield call(api.setToken, currentToken);
            console.log("Token mavjud");
        }

        const response = yield call(api.filemanager.addTask, request);
        //console.log(JSON.stringify(response.data));
        yield all([
            put(
                addTask.success({
                    request,
                    response
                })
            )
        ])



    }
    catch (e) {
        console.log("Add Tasks ishlamayapti:", e)
        yield put(addTask.failure(e))
    }
    finally {
        yield put(addTask.fulfill())
    }
}

export default function* (api) {
    yield takeEvery(addTask.TRIGGER, trigger, api)
}