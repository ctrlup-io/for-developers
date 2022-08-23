import type { DocumentSnapshot } from "firebase/firestore";
import type { Document } from "./types";

export default function parseDoc(doc: DocumentSnapshot): Document {
  return { id: doc.id, ...doc.data() };
}
