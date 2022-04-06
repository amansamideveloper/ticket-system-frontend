import { CHECK_IN_USER, GET_TICKET_TYPE, DONT_SHOW_ERROR, LOADING, CLEAR, SET_BOOKING, GET_ERRORS } from "../actions/types";
const initialState = {
    loading: false,
    errors: null,
    booking: null
}
export default function (state = initialState, action) {
    switch (action.type) {

        case SET_BOOKING:
            return {
                ...state,
                loading: false,
                booking: action.payload
            }
        case LOADING:
            return {
                ...state,
                loading: true
            }
        case DONT_SHOW_ERROR:
            return {
                ...state,
                errors: null
            }
        default:
            return state;

    }
}