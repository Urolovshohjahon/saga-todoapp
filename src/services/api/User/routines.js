import { createRoutine, promisifyRoutine } from 'redux-saga-routines';

export const getMe = createRoutine(('GET_ME'));
export const register = createRoutine(('REGISTER'));
export const login = createRoutine(('LOGIN'));
export const updateProfile = createRoutine(('UPDATE_PROFILE'));
export const uploadImage = createRoutine(('UPLOAD_IMAGE'));
export const getAvatar = createRoutine(('GET_AVATAR'));

export default {
    getMe: promisifyRoutine(getMe),
    register: promisifyRoutine(register),
    login: promisifyRoutine(login),
    updateProfile: promisifyRoutine(updateProfile),
    uploadImage: promisifyRoutine(uploadImage),
    getAvatar: promisifyRoutine(getAvatar),
}
