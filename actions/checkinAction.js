
import axios from "axios"
import { CHECK_IN_USER, GET_ERRORS, GET_TICKET_TYPE, LOADING, CLEAR, SET_BOOKING } from "./types"

export const checkinUser = (userData) => dispatch => {
    const url = 'https://aman-ticket-system.herokuapp.com/api/v1/travels/checkin';
    dispatch(setLoading())
    axios
        .post(url, userData, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json;charset=UTF-8",
            },
        })
        .then(res => dispatch({
            type: CHECK_IN_USER,
            payload: res.data
        })).catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err
            }))
    return {
        type: CHECK_IN_USER,
        payload: userData
    }
}
export const getTickets = () => dispatch => {
    dispatch(setLoading())
    axios.get('https://aman-ticket-system.herokuapp.com/api/v1/tickets')
        .then(res =>
            dispatch({
                type: GET_TICKET_TYPE,
                payload: res.data.success
            })).catch(err =>
                console.log(err))


}


export const setLoading = () => {
    return {
        type: LOADING
    }
}
export const clear = () => {
    return {
        type: CLEAR
    }
}

