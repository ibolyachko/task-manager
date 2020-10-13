// Core
import React, { useState } from 'react';

// Components
import { Create } from './components/create';
import { Wrapper } from './components/wrapper';
import { List } from './components/list';
import { Card } from './components/card';

// Contexts
import { TodoContext } from './contexts/todoContext';

export const Todo = () => {
    const [isCard, setIsCard] = useState(false);
    const handleClickCreate = (state = true) => setIsCard(state);

    return (
        <>
            <TodoContext.Provider value={{handleClickCreate}}>
                <Create>New Task</Create>
                <Wrapper>
                    <List/>
                    {
                        isCard && <Card />
                    }
                </Wrapper>
            </TodoContext.Provider>
        </>
    )
}
