// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { getStorage } from "firebase/storage";
import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAGTj4pgWyhdV0fLT3XRRtCGUaei6BfKxA",
    authDomain: "disney-clone-1815b.firebaseapp.com",
    projectId: "disney-clone-1815b",
    storageBucket: "disney-clone-1815b.appspot.com",
    messagingSenderId: "52520119738",
    appId: "1:52520119738:web:0ace33f5d5b729e2064183"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const user = auth.currentUser;
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account",
});
const storage = getStorage(app);



// const loginWithGoogle = async () => {
//     try {
//         await signInWithPopup(auth, provider)
//         // const res = await signInWithPopup(auth, provider);





//         // const user = res.user;
//         // const q = query(collection(db, "users"), where("uid", "==", user.uid));
//         // const docs = await getDocs(q);
//         // if (docs.docs.length === 0) {
//         //     await addDoc(collection(db, "users"), {
//         //         uid: user.uid,
//         //         name: user.displayName,
//         //         authProvider: "google",
//         //         email: user.email,
//         //     });
//         // }
//     } catch (err) {
//         console.error(err);
//     }
// };



export { auth, provider, storage, user }
export default db;
