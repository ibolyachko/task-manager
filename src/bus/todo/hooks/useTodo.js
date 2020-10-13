// Core
import { useDispatch } from 'react-redux';

// Actions
import { todoActions } from '../actions';

export const useTodo = () => {
    const dispatch = useDispatch();
    const fillTodo = (todo) => { 
        const action = todoActions.fill(todo);
        dispatch(action);
     }
     
    return {
        fillTodo,
    }
}
