import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase, ref, child, get } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDqdgp-j-av-X-C4nhGhe-SXuzFae94tSQ",
  authDomain: "filestore-1741c.firebaseapp.com",
  databaseURL: "https://filestore-1741c-default-rtdb.firebaseio.com",
  projectId: "filestore-1741c",
  storageBucket: "filestore-1741c.appspot.com",
  messagingSenderId: "1052972996263",
  appId: "1:1052972996263:web:a566f762b56afd81e0ed82",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const database = getDatabase(app);

let activeUser = null;
let username = null;
let purchase = null;
async function getUserByUID(uid) {
  try {
    const snapshot = await get(child(ref(database), `users/${uid}`));
    if (snapshot.exists()) {
      activeUser = snapshot.val();
      username = activeUser.username;
      purchase = activeUser.purchased;
      return activeUser;
    } else {
      activeUser = null;
      username = null;
      return null;
    }
  } catch (error) {
    console.error("Error getting user:", error);
    throw error;
  }
}

export {
  auth,
  firestore,
  database,
  getUserByUID,
  activeUser,
  username,
  purchase,
};
export default app;
