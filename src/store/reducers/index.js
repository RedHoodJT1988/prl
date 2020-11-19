import { combineReducers } from 'redux';
import auth from './auth_reducers';
import profile from './profile_reducers';
import event from './event_reducers'

const rootReducer = combineReducers({
    auth,
    profile,
    event
})

export default rootReducer;