import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs,
} from "firebase/firestore";

export const getCollection = async (collections) => {
  const db = getFirestore();
  const categoriaCollection = collection(db, collections);
  const result = await getDocs(categoriaCollection);
  return result.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};
