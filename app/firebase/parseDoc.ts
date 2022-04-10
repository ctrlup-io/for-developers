import { DocumentSnapshot } from "firebase/firestore";

export default function parseDoc(doc: DocumentSnapshot) {
  return { id: doc.id, ...doc.data() };
}
