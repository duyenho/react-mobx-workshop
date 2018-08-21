import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import './index.css';
import TodoApp from './components/TodoApp';
import Todos from './stores/Todos';

ReactDOM.render(
  <Provider>
    <TodoApp/>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
