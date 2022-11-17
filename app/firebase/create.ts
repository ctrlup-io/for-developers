import { addDoc, collection } from "firebase/firestore";

import { db } from ".";

export default async function create(name: string, data: any = {}) {
  const createdAt = Date.now();
  const payload = {
    ...data,
    createdAt,
    updatedAt: createdAt,
  };
  const ref = await addDoc(collection(db, name), payload);
  return ref;
}
