import { createStore, combineReducers } from 'redux';

//reducers
import login from 'ticketReservation/app/reducers/login';

const reducers = {
    login
};

export default createStore(combineReducers(reducers));