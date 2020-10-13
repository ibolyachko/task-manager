// Core
import React, { useState, useEffect, useContext } from 'react';
import { Formik, Form, Field } from 'formik';
import classnames from 'classnames';

// Components
import { Deadline } from '../deadline';
import { SubTasks } from '../subtasks';
import { Tags } from '../tags';
import { Messages } from '../messages';

// Init Data
import { initialValues } from './initialValues';

// Validation
import { validationSchema } from './validationSchema';

// Hooks
import { useTask } from '../../hooks/useTask';
import { useTaskFetch } from '../../hooks/useTaskFetch';

// Contexts
import { CardContext } from '../../contexts/cardContext';
import { TodoContext } from '../../contexts/todoContext';

export const Card = () => {
    const [taskValues, setTaskValues] = useState(initialValues);
    const { handleClickCreate } = useContext(TodoContext);
    const { task } = useTask();
    const { createTask, updateTaskByHash, deleteTaskByHash } = useTaskFetch();

    const handleSubmitForm = (data) => {
        if (task && task.hash) {
            updateTaskByHash(task.hash, data);
        } else {
            createTask(data);
        }
        handleClickCreate(false);
    }

    const handleClickDelete = () => {
        deleteTaskByHash(task.hash);
        handleClickCreate(false);
    }

    useEffect(() => {
        if (task) {
            const data = Object.keys(initialValues)
                .reduce((prev, key) => {
                    return {
                        ...prev, [key]: task[key]
                    }
                }, {})
            setTaskValues(data);
        } else {
            setTaskValues(initialValues)
        }
    }, [task])

    return (
        <>
            <div className="task-card">
                <Formik
                    initialValues={taskValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmitForm}
                    enableReinitialize
                >
                    {
                        ({ values, errors, setFieldValue, resetForm, dirty, isValid }) => {
                            const handleClickComleted = () => setFieldValue('completed', !values.completed);
                            const handleClickResetForm = () => resetForm();
                            
                            return (
                                <CardContext.Provider value={{values, errors, setFieldValue}}>
                                    <Form>
                                        <div className="head">
                                            <button 
                                                type="button" 
                                                className={classnames('button-complete-task', {completed: values.completed})} 
                                                onClick={handleClickComleted}>Mark as complete</button>
                                            {
                                                task && task.hash && (
                                                    <button type="button" className="button-remove-task" onClick={handleClickDelete}/>
                                                )
                                            }
                                        </div>
                                        <div className="content">
                                            <Field type="text" placeholder="Task title" className="title" name="title"/>
                                            <div className="deadline">
                                                <span className="label">Due to</span>
                                                <Deadline />
                                            </div>
                                            <div className="description">
                                                <span className="label">Description</span>
                                                <Field type="textarea" name="description" className="text" placeholder="Describe your event"/>
                                            </div>
                                            <div className="checklist">
                                                <span className="label">Checklist</span>
                                                <SubTasks />
                                            </div>
                                            <div className="tags">
                                                <Tags />
                                            </div>
                                            <div className="errors">
                                                <Messages />
                                            </div>
                                            <div className="form-controls">
                                                <button type="reset" className="button-reset-task" onClick={handleClickResetForm} disabled={!dirty}>Reset</button>
                                                <button type="submit" className="button-save-task" disabled={!dirty || !isValid}>Save</button>
                                            </div>
                                            
                                        </div>
                                    </Form>
                                </CardContext.Provider>
                            )
                        }
                    }
                </Formik>
          </div>
        </>
    )
}
