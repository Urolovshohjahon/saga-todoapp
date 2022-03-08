import { call, all, put, takeEvery } from 'redux-saga/effects';
import { getAvatar } from '../routines';
import TokenStorage from '../../../TokenStorage';

function* trigger(api, action) {
    const { request } = action.payload;
    // console.log(JSON.stringify(request));
    try {
        yield put(getAvatar.request());

        // const currentToken = yield call(TokenStorage.get);
        // console.log("Bu joriy token------------------", currentToken);

        // if (currentToken) {
        //     yield call(api.setToken, currentToken);
        //     console.log("Token mavjud");
        // }

        const response = yield call(api.user.getAvatar, request);
        //console.log(JSON.stringify(response.data));
        yield all([
            put(
                getAvatar.success({
                    request,
                    response
                })
            )
        ])



    }
    catch (e) {
        console.log("Get Avatar ishlamayaptida cho'ta nima qilamiz endi...")
        yield put(getAvatar.failure(e))
    }
    finally {
        yield put(getAvatar.fulfill())
    }
}

export default function* (api) {
    yield takeEvery(getAvatar.TRIGGER, trigger, api)
}