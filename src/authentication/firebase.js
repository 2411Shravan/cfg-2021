import React from 'react'

import firebase from "firebase"
const app=firebase.initializeApp({

    apiKey: "AIzaSyDOkJWXLUYpmgE7nj3u7_VgE5l0lyb2YQE",
    authDomain: "hackathon-jpm.firebaseapp.com",
    projectId: "hackathon-jpm",
    storageBucket: "hackathon-jpm.appspot.com",
    messagingSenderId: "185246761958",
    appId: "1:185246761958:web:0d604468a574a4cc688c27"

})

export const auth=app.auth();
export const storage=app.storage();
export const db = app.firestore();
export const timestamp=firebase.firestore.FieldValue.serverTimestamp;
export default app 