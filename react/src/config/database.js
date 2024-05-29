import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import app from '../config/config.js';

const db = getFirestore(app);

// Function to get all documents from a collection (GET)
export const getDocuments = async (collectionName) => {
  const querySnapshot = await getDocs(collection(db, collectionName));
  const documents = [];
  querySnapshot.forEach((doc) => {
    documents.push({ id: doc.id, ...doc.data() });
  });
  return documents;
};


// Function to add a new document (POST)
export const addDocument = async (collectionName, data) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};


export default db;
