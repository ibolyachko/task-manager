// Core
import React from 'react';
import { Provider } from 'react-redux';

// Styles
import './source/styles/index.scss';

// Store
import { store } from './init/store';

// Layouts
import { Main } from './layouts/main';

// Components
import { Todo } from './bus/todo';

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <Main>
          <Todo/>
        </Main>
      </Provider>
    </>
  )
};
