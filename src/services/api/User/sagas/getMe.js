import { call, all, put, takeEvery } from 'redux-saga/effects';
import { getMe } from '../routines';
import TokenStorage from '../../../TokenStorage';

function* trigger(api, action) {
    const { request } = action.payload;
    // console.log(JSON.stringify(request));
    try {
        yield put(getMe.request());

        const currentToken = yield call(TokenStorage.get);
        console.log("Bu joriy token------------------", currentToken);

        if (currentToken) {
            yield call(api.setToken, currentToken);
            console.log("Token mavjud");
        }

        const response = yield call(api.user.getMe, request);
        //console.log(JSON.stringify(response.data));
        yield all([
            put(
                getMe.success({
                    request,
                    response
                })
            )
        ])



    }
    catch (e) {
        console.log("GETME ishlamayaptida cho'ta nima qilamiz endi...")

        yield put(getMe.failure(e))
    }
    finally {
        yield put(getMe.fulfill())
    }
}

export default function* (api) {
    yield takeEvery(getMe.TRIGGER, trigger, api)
}