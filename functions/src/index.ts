// import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

import { auth } from './api';
const functions = require('firebase-functions');
const universal = require(`${process.cwd()}/dist/server`).app;
exports.api = functions.https.onRequest(auth);
exports.ssr = functions.https.onRequest(universal)