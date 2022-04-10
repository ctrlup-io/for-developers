import { doc, getDoc } from "firebase/firestore";

import { db } from ".";
import parseDoc from "./parseDoc";

export default async function getOne(name: string, id: string) {
  const snapshot = await getDoc(doc(db, name, id));
  return parseDoc(snapshot);
}
