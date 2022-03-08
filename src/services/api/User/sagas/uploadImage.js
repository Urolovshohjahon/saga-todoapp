import { call, all, put, takeEvery } from 'redux-saga/effects';
import { uploadImage } from '../routines';
import TokenStorage from '../../../TokenStorage';

function* trigger(api, action) {
    const { request } = action.payload;
    // console.log(JSON.stringify(request));
    try {
        yield put(uploadImage.request());

        /* const currentToken = yield call(TokenStorage.get);
        console.log("Bu joriy token------------------", currentToken); */

        /* if (currentToken) {
            yield call(api.setToken, currentToken);
            console.log("Token mavjud");
        } */

        const response = yield call(api.user.uploadImage, request);
        //console.log(JSON.stringify(response.data));
        yield all([
            put(
                uploadImage.success({
                    request,
                    response
                })
            )
        ])



    }
    catch (e) {
        console.log("Upload Image ishlamayaptida cho'ta nima qilamiz endi...")

        yield put(uploadImage.failure(e))
    }
    finally {
        yield put(uploadImage.fulfill())
    }
}

export default function* (api) {
    yield takeEvery(uploadImage.TRIGGER, trigger, api)
}