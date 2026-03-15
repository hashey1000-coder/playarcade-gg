/**
 * Firebase initialisation — client-side only.
 *
 * Firebase web config values are intentionally public — they identify the
 * project but do not grant any access on their own. Access is controlled
 * entirely by Firebase Security Rules in the console.
 */

import { initializeApp, getApps, type FirebaseApp } from 'firebase/app';
import { getDatabase, type Database } from 'firebase/database';

const firebaseConfig = {
  apiKey:            'AIzaSyAWNxAVp-Ha2D60aOcD_SUMk2ohiBjPae0',
  authDomain:        'playarcade-f5b48.firebaseapp.com',
  databaseURL:       'https://playarcade-f5b48-default-rtdb.firebaseio.com',
  projectId:         'playarcade-f5b48',
  storageBucket:     'playarcade-f5b48.firebasestorage.app',
  messagingSenderId: '517286138055',
  appId:             '1:517286138055:web:f2a59a613aaaf51852eee2',
};

// Guard: Firebase RTDB web SDK requires a browser environment.
// During SSR/prerender (Node.js) we export null so hooks can bail out safely.
let db: Database | null = null;

if (typeof window !== 'undefined') {
  const app: FirebaseApp = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
  db = getDatabase(app);
}

export { db };
