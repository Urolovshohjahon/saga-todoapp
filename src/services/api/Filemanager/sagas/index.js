import { all } from "redux-saga/effects";
import upload from './upload'
import deleteImage from './deleteImage'
import getAllTasks from "./getAllTasks";
import addTask from "./addTask";
import deleteTask from "./deleteTask";
import getTaskById from "./getTaskById";
import updateTaskById from "./updateTaskById";

export default function* sagas(api) {
    yield all(
        [
            upload(api),
            deleteImage(api),
            getAllTasks(api),
            addTask(api),
            deleteTask(api),
            getTaskById(api),
            updateTaskById(api)
        ]
    )
}