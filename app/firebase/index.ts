import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const app =
  getApps().length === 0
    ? initializeApp({
        apiKey: process.env.FIREBASE_API_KEY,
        projectId: process.env.FIREBASE_PROJECT_ID,
        appId: process.env.FIREBASE_APP_ID,
      })
    : getApp();

const db = getFirestore(app);

export { app, db };
export { default as getJob } from "./getJob";
export { default as getJobs } from "./getJobs";
