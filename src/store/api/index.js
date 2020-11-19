import { charitiesCollection, eventsCollection, firebase, usersCollection, playerEventProfileCollection } from '../../firebase';

export const registerUser = async ({ email, password }) => {
    const response = await firebase.auth()
        .createUserWithEmailAndPassword(email, password);
    const { user } = response;
    const userProfile = {
        uid: user.uid,
        email: email
    };
    await usersCollection.doc(user.uid).set(userProfile);
    return { user: userProfile }
}

export const login = async ({ email, password }) => {
    const response = await firebase.auth().signInWithEmailAndPassword(email, password);
    const { user } = response;
    return { user }
}

export const writeProfileInformation = async ({ userId, name, nickName, eventName, charity }) => {
    console.log('what are these values?', userId, name, nickName, eventName, charity);
    const response = await usersCollection.doc(userId).set({
        name,
        nickName,
        eventName,
        charity
    });
    return response;
}

export const readProfileInformation = async (userId) => {
    const response = await usersCollection.doc(userId).get()
    console.log(userId);
    return response.data()
}

export const readProfileEvents = async (userId) => {
    const response = await playerEventProfileCollection.where('userID', '==', userId).get();
    return response;
}

export const getAllCharities = async () => {
    const response = await charitiesCollection.get();
    return response;
}

export const getCharity = async () => {
    const response = await charitiesCollection.get().doc();
    return response;
}

export const getAllEvents = async () => {
    const response = await eventsCollection.get();
    return response;
}