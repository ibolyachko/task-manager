// Core
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { todoActions } from '../actions';

export const useTask = () => {
    const dispatch = useDispatch();
    const { task } = useSelector(state => state.todo)
    const fillTask = (task) => { 
        const action = todoActions.fillTask(task);
        dispatch(action);
    }
    const resetTask = () => {
         const action = todoActions.resetTask()
         dispatch(action);
    }
    
    return {
        task,
        fillTask,
        resetTask,
    }
}
