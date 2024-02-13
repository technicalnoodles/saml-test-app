import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
<<<<<<< HEAD
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import './styles/cui-standard.min.css';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
=======
import './styles/cui-standard.min.css';

const store = createStore(() => {}, {}, applyMiddleware());
>>>>>>> main

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
