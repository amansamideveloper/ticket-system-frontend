import { CHECK_IN_USER, GET_TICKET_TYPE, LOADING, CLEAR, SET_BOOKING } from "../actions/types";
const initialState = {

    ticketType: null,
    loading: false,
    availableBus: null,
    booking: null
}
export default function (state = initialState, action) {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: true
            }

        case GET_TICKET_TYPE:
            return {
                ...state,
                ticketType: action.payload,
                loading: false
            }
        case SET_BOOKING:
            return {
                ...state,
                booking: action.payload
            }
        case CHECK_IN_USER:
            return {
                ...state,
                availableBus: action.payload,
                loading: false
            }
        case CLEAR:
            return {
                availableBus: null
            }

        default:
            return state;

    }
}