// import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
const functions = require('firebase-functions');
const universal = require(`${process.cwd()}/dist/server.js`).app;
import { auth } from './api';
exports.api = functions.https.onRequest(auth);
exports.ssr = functions.https.onRequest(universal)