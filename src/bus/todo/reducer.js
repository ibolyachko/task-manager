// Types
import { types } from './types';

const initialState = {
    data: null,
    task: null,
    isFetching: false,
    error: null,
};

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.TODO_START_FETCHING:
            return {
                ...state,
                isFetching: true
            }
        case types.TODO_STOP_FETCHING:
            return {
                ...state,
                isFetching: false
            }
        case types.TODO_ERROR_FETCHING:
            return {
                ...state,
                data: null,
                error: action.payload
            }
        case types.TODO_FILL:
            return {
                ...state,
                data: action.payload,
                error: null
            }
        case types.TODO_TASK_FILL:
            return {
                ...state,
                task: action.payload,
                error: null
            }
        case types.TODO_TASK_RESET:
            return {
                ...state,
                task: action.payload,
                error: null
            }
        case types.TODO_TASK_ADD:
            return {
                ...state,
                data: [...state.data, action.payload],
                task: null,
                error: null
            }
        case types.TODO_TASK_UPDATE:
            return {
                ...state,
                data: state.data.map(item => item.hash === action.payload.hash 
                        ? action.payload 
                        : item),
                task: null,
                error: null
            }
        case types.TODO_TASK_DELETE:
            return {
                ...state,
                data: state.data.filter(({ hash }) => hash !== action.payload),
                task: null,
                error: null
            }
        
        default:
            return state;
    }
}