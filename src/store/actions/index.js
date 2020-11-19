import * as api from '../api';

export const registerUser = (values) => ({
    type: 'REGISTER_USER',
    payload: api.registerUser(values)
})

export const login = (values) => ({
    type: 'LOGIN_USER',
    payload: api.login(values)
})

export const writeProfile = (values) => ({
    type: 'USER_PROFILE_WRITE',
    payload: api.writeProfileInformation(values)
})

export const readProfile = (userId) => ({
    type: 'USER_PROFILE_READ',
    payload: api.readProfileInformation(userId)
})

export const readProfileEvents = (userId) => ({
    type: 'USER_PROFILE_EVENTS',
    payload: api.readProfileEvents(userId)
})

export const readEvents = () => ({
    type: 'EVENTS_READ',
    payload: api.getAllEvents()
})

export const readCharity = () => ({
    type: 'CHARITY_READ',
    payload: api.getCharity()
})

export const readCharities = () => ({
    type: 'CHARITIES_READ',
    payload: api.getAllCharities()
})