import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

import { 
  DB_API_KEY, 
  DB_AUTH_DOMAIN, 
  DB_PROJECT_ID, 
  DB_STORAGE_BUCKET, 
  DB_MESSAGING_SENDER_ID, 
  DB_APPID
} from "../config/config";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: DB_API_KEY,
  authDomain: DB_AUTH_DOMAIN,
  projectId: DB_PROJECT_ID,
  storageBucket: DB_STORAGE_BUCKET,
  messagingSenderId: DB_MESSAGING_SENDER_ID,
  appId: DB_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)