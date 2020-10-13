// Core
import React, { useContext } from 'react';

// Contexts
import { TodoContext } from '../../contexts/todoContext';

// Hooks
import { useTask } from '../../hooks/useTask';

export const Create = ({ children }) => {
    const { handleClickCreate } = useContext(TodoContext);
    const { resetTask } = useTask();

    const handleClickCreateTask = () => {
        resetTask();
        handleClickCreate(true);
    }
    
    return (
        <div className="controls">
            <button className="button-create-task" onClick={handleClickCreateTask}>
                { children }
            </button>
        </div>
    )
}
