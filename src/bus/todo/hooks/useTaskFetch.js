// Core
import { useDispatch } from 'react-redux';

// Actions
import { todoActions } from '../actions';

export const useTaskFetch = () => {
    const dispatch = useDispatch();
    const createTask = (task) => {
        const action = todoActions.createTask(task);
        dispatch(action);
    }
    const getTaskByHash = (hash, task) => {
        const action = todoActions.updateTaskByHash(hash, task);
        dispatch(action);
    }
    const updateTaskByHash = (hash, task) => {
        const action = todoActions.updateTaskByHash(hash, task);
        dispatch(action);
    }
    const deleteTaskByHash = (hash) => {
        const action = todoActions.deleteTaskByHash(hash);
        dispatch(action);
    }
    
    return {
        createTask,
        getTaskByHash,
        updateTaskByHash,
        deleteTaskByHash,
    }
}
