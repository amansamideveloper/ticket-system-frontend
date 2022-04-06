
import axios from "axios"
import { CHECK_IN_USER, GET_ERRORS, DONT_SHOW_ERROR, GET_BOOKING_ERROR, GET_TICKET_TYPE, LOADING, CLEAR, SET_BOOKING } from "./types"


export const bookingUser = (userData) => dispatch => {
    dispatch(setLoading())
    dispatch(dontShowerror())
    const url = 'https://aman-ticket-system.herokuapp.com/api/v1/buyies';
    axios
        .post(url, userData, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json;charset=UTF-8",
            },
        }).then(res =>
            dispatch({
                type: SET_BOOKING,
                payload: res.data
            })).catch(err =>
                dispatch({
                    type: GET_ERRORS,
                    payload: err
                })

            )

}

export const setLoading = () => {
    return {
        type: LOADING
    }
}
export const dontShowerror = () => {
    return {
        type: DONT_SHOW_ERROR
    }
}