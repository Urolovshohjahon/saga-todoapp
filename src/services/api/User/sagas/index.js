import { all } from "redux-saga/effects";
import getAvatar from "./getAvatar";

import getMe from "./getMe";
import login from "./login";
import register from "./register";
import updateProfile from "./updateProfile";
import uploadImage from "./uploadImage";

export default function* sagas(api) {
    yield all(
        [
            getMe(api),
            register(api),
            login(api),
            updateProfile(api),
            getAvatar(api),
            uploadImage(api),
        ]
    )
}
