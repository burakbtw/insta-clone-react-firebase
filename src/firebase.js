import {initializeApp} from "firebase/app";
import {getAuth, signOut, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";
import toast from "react-hot-toast";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { userHandle } from "utils";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, where } from "firebase/firestore";



	const firebaseConfig = {
  apiKey: "AIzaSyBihxtlkOAO2sprFoq1USO0AKPSaBjuzb0",
  authDomain: "instagramclonee9.firebaseapp.com",
  projectId: "instagramclonee9",
  storageBucket: "instagramclonee9.appspot.com",
  messagingSenderId: "307427865123",
  appId: "1:307427865123:web:f01edde9a106d570a5b796",
  measurementId: "G-2KMDQ4JVY7"
};
	


const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore()

onAuthStateChanged(auth, user => {
    userHandle(user || false)
})

export const login = async (email, password) => {
    try {
        const response = await signInWithEmailAndPassword(auth, email, password)
    } catch (err) {
        toast.error(err.code)
    }
}

export const logout = async () => {
    try {
        await signOut(auth)
    } catch (err) {
        toast.error(err.code)
    }
}

export const getUserInfo = async (username) => {
  const userDoc = await getDocs(collection(db, "users"), where("username", "==", username))
  if (userDoc.docs.length > 0) {
    return userDoc.docs[0].data();
  } else {
    throw new Error("User not found.");
  }
}

export const register = async ({email, password, full_name, username}) => {
	try {
	  const { user } = await createUserWithEmailAndPassword(auth, email, password)
	  await setDoc(doc(db, "users", user.uid), {
		email,
		full_name,
		username,
		created_at: serverTimestamp()
	  })
	  return true
	} catch (err) {
	  toast.error(err.code)
	  return false
	}
};
