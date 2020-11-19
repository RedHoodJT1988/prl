const INITIAL_STATE = {
    events: [],
    error: null
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'EVENTS_READ':
            const events = action.payload.docs.map((doc) => {
                return doc.data();
            });
            return { ...state, events }
        default:
            return state
    }
}