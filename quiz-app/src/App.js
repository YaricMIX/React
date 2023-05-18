import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import quizReducer from './store/reducers';
import Quiz from './components/Quiz';

const store = createStore(quizReducer);

const App = () => {
  return (
    <Provider store={store}>
      <Quiz />
    </Provider>
  );
};

export default App;
