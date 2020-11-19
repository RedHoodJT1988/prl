import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyAx9dWPR-ZG-YlQ3C_3SSvZxZ5Ky_S6tto",
  authDomain: "players-recreation-league.firebaseapp.com",
  databaseURL: "https://players-recreation-league.firebaseio.com",
  projectId: "players-recreation-league",
  storageBucket: "players-recreation-league.appspot.com",
  messagingSenderId: "119355010184",
  appId: "1:119355010184:web:1d14b74448c5e799dd033d",
  measurementId: "G-CN4TF1JER0"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const usersCollection = db.collection('users');
const eventsCollection = db.collection('events');
const contestTypesCollection = db.collection('contestTypes');
const contestsCollection = db.collection('contestsCollection');
const gameScheduleCollection = db.collection('gameSchedule');
const gameScoresScheduleCollection = db.collection('gameScores');
const playerEventProfileCollection = db.collection('playerEventProfile');
const charitiesCollection = db.collection('charities');

export {
  firebase,
  usersCollection,
  eventsCollection,
  contestTypesCollection,
  contestsCollection,
  gameScheduleCollection,
  gameScoresScheduleCollection,
  playerEventProfileCollection,
  charitiesCollection
}