import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyDJsYJb2jlt1ll1_RMQ3GlbJdi0UvLElto',
  authDomain: 'vue-cli-3-56cac.firebaseapp.com',
  databaseURL: 'https://vue-cli-3-56cac.firebaseio.com',
  projectId: 'vue-cli-3-56cac',
  storageBucket: 'vue-cli-3-56cac.appspot.com',
  messagingSenderId: '545557407684'
}

firebase.initializeApp(config)

const db = firebase.firestore()

export default db