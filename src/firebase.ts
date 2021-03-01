import firebase from 'firebase';

const Config = {
    apiKey: "AIzaSyDiFrUHb1XX92VuCEEVuVvQP9HHBPtC2fA",
    authDomain: "quiz-app-pwa1.firebaseapp.com",
    projectId: "quiz-app-pwa1",
    storageBucket: "quiz-app-pwa1.appspot.com",
    messagingSenderId: "404446058020",
    appId: "1:404446058020:web:cf46964b564a49e3d62ab1"
};


firebase.initializeApp(Config);
const messaging = firebase.messaging();

export function initNotification() {
    Notification.requestPermission().then((permission) => {
        console.log(permission)
        if (permission === "granted") {
            // Get registration token. Initially this makes a network call, once retrieved
            // subsequent calls to getToken will return from cache.
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                    // Send the token to your server and update the UI if necessary
                    console.log(currentToken)
                } else {
                    // Show permission request UI
                    console.log('No registration token available. Request permission to generate one.');
                    // ...
                }
            }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
                // ...
            });

        }
    })
}