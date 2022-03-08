import { call, all, put, takeEvery } from 'redux-saga/effects';
import { updateProfile } from '../routines';
import TokenStorage from '../../../TokenStorage';

function* trigger(api, action) {
    const { request } = action.payload;
    // console.log(JSON.stringify(request));
    try {
        yield put(updateProfile.request());

        // const currentToken = yield call(TokenStorage.get);
        // console.log("Bu joriy token------------------", currentToken);

        // if (currentToken) {
        //     yield call(api.setToken, currentToken);
        //     console.log("Token mavjud");
        // }

        const response = yield call(api.user.updateProfile, request);
        //console.log(JSON.stringify(response.data));
        yield all([
            put(
                updateProfile.success({
                    request,
                    response
                })
            )
        ])



    }
    catch (e) {
        console.log("Update Profile ishlamayaptida cho'ta nima qilamiz endi...")

        yield put(updateProfile.failure(e))
    }
    finally {
        yield put(updateProfile.fulfill())
    }
}

export default function* (api) {
    yield takeEvery(updateProfile.TRIGGER, trigger, api)
}