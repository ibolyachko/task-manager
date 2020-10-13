import React, { useContext, useState } from 'react';
import { Field } from 'formik';
import classnames from 'classnames';

// Helpers
import { rules } from '../../../../helpers/rules';

// Init Data
import { initialSubtaskValues } from '../card/initialValues';

// Contexts
import { CardContext } from '../../contexts/cardContext';

export const SubTasks = () => {
    const [focus, setFocus] = useState(false);
    const { values, setFieldValue } = useContext(CardContext);

    const handleClickCompleted = (index) => {
        return () => {
            setFieldValue(
                `checklist.${index}.completed`, 
                values.checklist[index].completed ? false : true
            );
        }
    }

    const handleKeyDownTitle = (event) => {
        const charCode = event.which || event.keyCode;
        const char = String.fromCharCode(charCode);
        if (rules.keyCodeAllow.test(char)) {
            setFieldValue('checklist', [
                    ...values.checklist, 
                    initialSubtaskValues
                ]
            );
            setFocus(true);
        }
    }

    return (
        <>
            <div className="sub-tasks">
                    {
                        values.checklist && values.checklist.map(({ title }, index) =>  (
                                <div className={classnames('sub-task', { completed: values.checklist[index] && values.checklist[index].completed })} key={`sub-task-${index}`}>
                                    <button type="button" onClick={handleClickCompleted(index)}></button>
                                    <Field 
                                        type="text" 
                                        name={`checklist.${index}.title`} 
                                        placeholder="Add more"
                                        value={title}
                                        autoFocus={index === values.checklist.length - 1 && focus}
                                    />
                                </div>
                            )
                        )
                    }
                    <div className="sub-task" key="sub-task-add">
                        <button type="button" disabled></button>
                        <Field type="text" name="add" placeholder="Add more" onKeyDown={handleKeyDownTitle}/>
                    </div>
            </div>
        </>
    )
}
