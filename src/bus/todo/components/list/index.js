// Core
import React, { useContext } from 'react';
import classnames from 'classnames';

// Init Data
import { tagsValues } from '../tags';

// Helper
import { date } from '../../../../helpers/date';

// Hooks
import { useTodoFetch } from '../../hooks/useTodoFetch';
import { useTask } from '../../hooks/useTask';

// Contexts
import { TodoContext } from '../../contexts/todoContext';

export const List = () => {
    const { data } = useTodoFetch();
    const { fillTask } = useTask();
    const { handleClickCreate } = useContext(TodoContext);
    
    const handleClickSelectTask = (task) => () => {
        fillTask(task);
        handleClickCreate(true);
    }

    return (
        <>
            {
                data && (
                    <div className={classnames('list', { empty: data.length === 0 })}>
                        <div className="tasks">
                            {
                                data.map((task, index) => {
                                    const { completed, title, deadline, tag} = task;
                                    const { classes } = tagsValues.find(item => item.name === tag);
                                    return (
                                        <div className={classnames('task', { completed })} key={`task-${index}`} onClick={handleClickSelectTask(task)}>
                                            <span className="title">{title}</span>
                                            <div className="meta">
                                                <span className="deadline">{date.formatDate(deadline)}</span>
                                                <span className={classnames('tag', [...classes])}>{tag}</span>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                )
            }
        </>
    )
}
