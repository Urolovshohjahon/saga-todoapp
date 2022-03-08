import {
    getMe,
    register,
    login
} from 'services/api/User/routines';
import get from 'lodash/get';
import uniqBy from "lodash/uniqBy";
import { LOGOUT, SET_URL } from "../constants";
import TokenStorage from 'services/TokenStorage';
import config from "../../services/config";
import { Api } from "../../services/api";

const initial = {
    unSendActions: [],
    data: {

    },
    baseUrl: config.API_ROOT
};

export default (state = initial, action) => {
    switch (action.type) {
        case getMe.SUCCESS: {
            let data = get(action, 'payload.response.data', {});

            console.log("getMe:", data)

            return {
                ...state,
                data
            }
        }
        case SET_URL: {
            Api.setBaseURL(action.payload)
            return {
                ...state,
                baseUrl: action.payload
            }
        }
        case LOGOUT: {
            TokenStorage.clear();
            return {
                ...initial,
                baseUrl: state.baseUrl
            }
        }
        case register.SUCCESS: {
            console.log("Bu action payloaaaaaaaaaaaaaad", action.payload.response.data.token)
            TokenStorage.set(action.payload.response.data.token)
        }
        case login.SUCCESS:{
            TokenStorage.set(action.payload.response.data.token)
        }
    }
    return state
}