import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import valueReducer from './store/reducers/Counter';
import isLogin from './store/reducers/isLogged';
import MainScreen from './mainscreen';

const rootReducer = combineReducers({
    valueReducer: valueReducer,
    isLogin: isLogin,
});
const store = createStore(rootReducer);
const App = props => {
    return (
        <Provider store={store}>
                <MainScreen />
        </Provider>
    );
};
export default App;