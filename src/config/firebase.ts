import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAupY8fy4uh15hxaaQnzfj9fYNbKu-ZZN8",
  authDomain: "healthieai.firebaseapp.com",
  projectId: "healthieai",
  storageBucket: "healthieai.firebasestorage.app",
  messagingSenderId: "471999540666",
  appId: "1:471999540666:web:b9d4d20ce4032da3ea4183",
  measurementId: "G-6C0R7TGLJG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export default app;
