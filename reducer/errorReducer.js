import { GET_ERRORS, GET_USER } from "../actions/types"

const initialState = {

}
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ERRORS:
            return action.payload

        default:
            return state;
    }
}

