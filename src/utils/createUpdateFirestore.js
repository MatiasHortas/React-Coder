import { getFirestore, collection, addDoc } from "firebase/firestore";

export const createOrder = async (items) => {
  const order = {
    buyer: {
      name: "Matias",
      phone: "3513289394",
      email: "matiashortas@gmail.com",
    },
    items: [{ name: items.name, price: items.price }],
    total: items.quantity,
  };
  const db = getFirestore();
  const orderCollection = collection(db, "orders");
  addDoc(orderCollection, order).then(({ id }) => {
    return id;
  });
};
