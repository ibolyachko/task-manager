// API
import { api } from '../../api';

// Types
import { types } from './types';

export const todoActions = {
    startFetching: () => {
        return {
            type: types.TODO_START_FETCHING
        }
    },
    stopFetching: () => {
        return {
            type: types.TODO_STOP_FETCHING
        }
    },
    errorFetching: (error) => {
        return {
            type: types.TODO_ERROR_FETCHING,
            payload: error,
            error: true
        }
    },
    fill: (data) => {
        return {
            type: types.TODO_FILL,
            payload: data
        }
    },
    fillTask: (task) => {
        return {
            type: types.TODO_TASK_FILL,
            payload: task
        }
    },
    resetTask: () => {
        return {
            type: types.TODO_TASK_RESET,
            payload: null
        }
    },
    addTask: (task) => {
        return {
            type: types.TODO_TASK_ADD,
            payload: task
        }
    },
    updateTask: (task) => {
        return {
            type: types.TODO_TASK_UPDATE,
            payload: task
        }
    },
    deleteTask: (hash) => {
        return {
            type: types.TODO_TASK_DELETE,
            payload: hash
        }
    },
    fillTodo: () => async (dispatch) => {
        dispatch(todoActions.startFetching());

        try {
            const response = await api.todo.getAll();
            if (response.status === 200) {
                const { data } = await response.json();
                dispatch(todoActions.fill(data));
            } else {
                const { message } = await response.json()
                const error = {
                    status: response.status,
                    message,
                }
                dispatch(todoActions.errorFetching(error))
            }
        } catch (error) {
            throw error
        }

        dispatch(todoActions.stopFetching());
    },
    createTask: (data) => async (dispatch) => {
        dispatch(todoActions.startFetching());

        try {
            const response = await api.todo.create({ data });
            if (response.status === 201) {
                const { data } = await response.json();
                dispatch(todoActions.addTask(data));
            } else {
                const { message } = await response.json();
                const error = {
                    status: response.status,
                    message,
                }
                dispatch(todoActions.errorFetching(error));
            }
        } catch (error) {
            throw error
        }

        dispatch(todoActions.stopFetching());
    },
    getTaskByHash: (hash) => async (dispatch) => {
        dispatch(todoActions.startFetching());

        try {
            const response = await api.todo.getByHash({ hash });
            if (response.status === 200) {
                const { data } = await response.json();
                dispatch(todoActions.fillTask(data));
            } else {
                const { message } = await response.json();
                const error = {
                    status: response.status,
                    message,
                }
                dispatch(todoActions.errorFetching(error))
            }
        } catch (error) {
            throw error
        }

        dispatch(todoActions.stopFetching());
    },
    updateTaskByHash: (hash, data) => async (dispatch) => {
        dispatch(todoActions.startFetching());

        try {
            const response = await api.todo.updateByHash({ hash, data });
            if (response.status === 200) {
                const { data } = await response.json();
                dispatch(todoActions.updateTask(data));
            } else {
                const { message } = await response.json();
                const error = {
                    status: response.status,
                    message,
                }
                dispatch(todoActions.errorFetching(error));
            }
        } catch (error) {
            throw error
        }

        dispatch(todoActions.stopFetching());
    },
    deleteTaskByHash: (hash) => async (dispatch) => {
        dispatch(todoActions.startFetching());

        try {
            const response = await api.todo.deleteByHash({ hash});
            if (response.status === 204) {
                dispatch(todoActions.deleteTask(hash));
            } else {
                const { message } = await response.json();
                const error = {
                    status: response.status,
                    message,
                }
                dispatch(todoActions.errorFetching(error));
            }
        } catch (error) {
            throw error
        }

        dispatch(todoActions.stopFetching());
    }
}