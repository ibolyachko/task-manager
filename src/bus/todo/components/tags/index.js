// Core
import React, { useContext } from 'react';
import classnames from 'classnames';

// Contexts
import { CardContext } from '../../contexts/cardContext';

export const tagsValues = Object.freeze([
    {
        name: 'Sketch',
        classes: ['first'],
    },
    {
        name: 'Spotify',
        classes: ['second'],
    },
    {
        name: 'Dribble',
        classes: ['third'],
    },
     {
        name: 'Behance',
        classes: ['fourth'],
    },
    {
        name: 'UX',
        classes: ['fifth'],
    },
]);

export const Tags = () => {
    const { values, setFieldValue } = useContext(CardContext);
    return (
        tagsValues && tagsValues.map(({ name, classes }) => {
            return (
                <span 
                    className={classnames('tag', [...classes], { selected: values.tag === name })} 
                    onClick={(event) => setFieldValue('tag', event.target.textContent)} 
                    key={name}
                >{name}</span>
            )
        })
        
    )
}