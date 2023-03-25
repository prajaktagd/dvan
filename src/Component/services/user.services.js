import { db } from "../../firebase";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const userCollectionRef = collection(db, "users");

class UserDataService {
  addUser = (newUser) => {
    return addDoc(userCollectionRef, newUser);
  };

  deleteUser = (id) => {
    const userDoc = doc(db, "users", id);
    return deleteDoc(userDoc);
  };

  getAllUsers = () => {
    return getDocs(userCollectionRef);
  };

  getUser = (id) => {
    const userDoc = doc(db, "users", id);
    return getDoc(userDoc);
  };
}

export default UserDataService = new UserDataService();
