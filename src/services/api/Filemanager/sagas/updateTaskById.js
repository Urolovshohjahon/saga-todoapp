import { call, all, put, takeEvery } from 'redux-saga/effects';

import { updateTaskByID } from '../routines';

function* trigger(api, action) {
    const { request } = action.payload;
    // console.log(JSON.stringify(request));
    try {
        yield put(updateTaskByID.request());


        const response = yield call(api.filemanager.updateTaskByID, request);
        //console.log(JSON.stringify(response.data));
        yield all([
            put(
                updateTaskByID.success({
                    request,
                    response
                })
            )
        ])



    }
    catch (e) {
        console.log("Update task  by id ishlamayapti:", e)
        yield put(updateTaskByID.failure(e))
    }
    finally {
        yield put(updateTaskByID.fulfill())
    }
}

export default function* (api) {
    yield takeEvery(updateTaskByID.TRIGGER, trigger, api)
}