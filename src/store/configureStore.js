import { createStore, combineReducers } from 'redux';
import userReducer from '../reducers/user';

export default () => {
    const store = createStore(
        combineReducers({
            users: userReducer,
        })
    );

    return store;
};
