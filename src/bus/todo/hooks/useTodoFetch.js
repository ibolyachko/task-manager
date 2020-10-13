// Core
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { todoActions } from '../actions';

export const useTodoFetch = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const action = todoActions.fillTodo();
        dispatch(action);
    }, [dispatch])

    const { data } = useSelector(state => state.todo);

    return {
        data
    }
}
