import {
    getAllTasks,
    addTask,
    deleteTask,
    getTaskById,
    updateTaskByID
} from 'services/api/Filemanager/routines';
import get from 'lodash/get';
import uniqBy from "lodash/uniqBy";
import TokenStorage from 'services/TokenStorage';
import config from "../../services/config";
import { Api } from "../../services/api";
import { SET_TASK_ID } from '../constants';

const initial = {
    tasks: [],
    task: {},
    taskId: null
};

export default (state = initial, action) => {
    switch (action.type) {
        case getAllTasks.SUCCESS: {
            console.log("Mana :", action.payload.response.data)
            return {
                ...state,
                tasks: action.payload.response.data.data
            }
        }
        case addTask.SUCCESS: {
            console.log("Manaaaaaaa :", action.payload.response.data)
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    action.payload.response.data.data
                ]
            }
        }
        case deleteTask.SUCCESS: {

            console.log("Mana delete :", action.payload.response.config)
            return {
                ...state,
                tasks: state.tasks.filter(task => task._id !== action.payload.response.config.params.id)
            }
        }
        case SET_TASK_ID: {
            return {
                ...state,
                taskId: action.payload
            }
        }
        /* case getTaskById.SUCCESS: {
            return {
                ...state,
                task: action.payload.response.data
            }
        } */
        case updateTaskByID.SUCCESS: {

            console.log("Bu updateTasjBy Id action payload",action.payload.request)
            // let filtered = state.tasks.filter(task => task._id !== action.payload.response.config.params.id)
            // return {
            //     ...state,
            //     tasks: [
            //         ...filtered,
                    
            //     ]
            // }
        }
        default: return state

    }
}