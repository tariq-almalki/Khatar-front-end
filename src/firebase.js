import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// firebase app configurations
const firebaseConfig = {
	apiKey: 'AIzaSyApQJz1twx2RuiaX14g2VRT--JMq9VdAOs',
	authDomain: 'khatar-app.firebaseapp.com',
	projectId: 'khatar-app',
	storageBucket: 'khatar-app.appspot.com',
	messagingSenderId: '750769439220',
	appId: '1:750769439220:web:c50b507d9a6882f86f39a1',
	measurementId: 'G-R3386MZ53P',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const firestore = getFirestore(firebaseApp);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(firebaseApp);