import type { QueryConstraint } from "firebase/firestore";
import { collection, getDocs, query } from "firebase/firestore";

import { db } from ".";
import parseDoc from "./parseDoc";

export default async function getAll(
  name: string,
  ...queryConstraints: QueryConstraint[]
) {
  const snapshot = await getDocs(
    query(collection(db, name), ...queryConstraints)
  );
  return snapshot.docs.map(parseDoc);
}
