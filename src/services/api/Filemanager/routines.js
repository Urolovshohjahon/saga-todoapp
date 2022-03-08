import { createRoutine, promisifyRoutine } from 'redux-saga-routines';

export const upload = createRoutine('UPLOAD_FILE_MANAGER');
export const deleteImage = createRoutine('DELETE_FILE_MANAGER');
export const getAllTasks = createRoutine(('GET_ALL_TASKS'));
export const addTask = createRoutine(('ADD_TASK'));
export const deleteTask = createRoutine(('DELETE_TASK'));
export const getTaskById = createRoutine(('GET_TASK_BY_ID'));
export const updateTaskByID = createRoutine(('UPDATE_TASK'));

export default {
    upload: promisifyRoutine(upload),
    deleteImage: promisifyRoutine(deleteImage),
    getAllTasks: promisifyRoutine(getAllTasks),
    addTask: promisifyRoutine(addTask),
    deleteTask: promisifyRoutine(deleteTask),
    getTaskById: promisifyRoutine(getTaskById),
    updateTaskByID: promisifyRoutine(updateTaskByID)
}
