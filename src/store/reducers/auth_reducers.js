const INITIAL_STATE = {
    user: {},
    isAuth: false,
    error: null
}

export default function (state=INITIAL_STATE, action) {
    switch(action.type) {
        case 'REGISTER_USER':
            return {...state, user: action.payload }
        case 'LOGIN_USER':
            return {...state, userId: action.payload.user.uid }
        default:
            return state
    }
}