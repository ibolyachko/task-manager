// Core
import React, { useContext } from 'react';

// Contexts
import { CardContext } from '../../contexts/cardContext';

export const Messages = () => {
    const { errors } = useContext(CardContext);
    const Message = ({ children }) => (
        <p className="errorMessage">{children}</p>
    );

    return Object.entries(errors).map(([errorKey, error], index) => {
        if(Array.isArray(error)) {
            const errors = error
                .map((errors, index) => {
                    if (!errors) return null;
                    return Object.entries(errors).map(([errorKey, error]) => {
                        const message = error.replace('{i}', ++index);
                        return (
                            <Message key={`${errorKey}.${index}`}>{message}</Message>
                        )
                    })
                })
                .filter(error => error)
                .flat();

            return errors
        }
        
        return (
            <Message key={`${errorKey}.${index}`}>{error}</Message>
        )
        
    })

}
