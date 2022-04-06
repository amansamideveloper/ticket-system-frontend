import { combineReducers } from 'redux'
import authReducer from './authReducer'
import errorReducer from './errorReducer'
import checkinReducer from './checkinReducer'
import bookingReducer from './bookingReducer'
export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    checkin: checkinReducer,
    booking: bookingReducer
})

