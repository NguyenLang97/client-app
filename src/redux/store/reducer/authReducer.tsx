import { LOGIN, LOGOUT } from '../action/authAction'

const INITIAL_STATE = {
    currentUser: JSON.parse(localStorage.getItem('user') as string) || null,
}

interface ActionProps {
    type: string
    payload: string
}

const authReducer = (state = INITIAL_STATE, action: ActionProps) => {
    switch (action.type) {
        case LOGIN: {
            return {
                currentUser: action.payload,
            }
        }
        case LOGOUT: {
            return {
                currentUser: action.payload,
            }
        }
        default:
            return state
    }
}

export default authReducer
