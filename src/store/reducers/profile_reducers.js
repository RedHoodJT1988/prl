const INITIAL_STATE = {
    profile: {},
    profileEvents: [],
    error: null
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'USER_PROFILE_READ':
            return { ...state, profile: action.payload }
        case 'USER_PROFILE_EVENTS':
            const events = action.payload.docs.map((doc) => {
                return doc.data();
            });
            return { ...state, profileEvents: events }
        default:
            return state
    }
}