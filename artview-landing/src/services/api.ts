import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "./firebase";

// Firestore 컬렉션 이름
const COMMENTS_COLLECTION = "comments";

// 댓글 등록
export const addComment = async (comment: string) => {
  const docRef = await addDoc(collection(db, COMMENTS_COLLECTION), {
    comment,
    createdAt: new Date().toISOString(),
  });
  return docRef.id;
};

// 댓글 조회
export const fetchComments = async () => {
  const q = query(
    collection(db, COMMENTS_COLLECTION),
    orderBy("createdAt", "desc")
  );
  const querySnapshot = await getDocs(q);

  const comments: string[] = [];
  querySnapshot.forEach((doc) => {
    comments.push(doc.data().comment);
  });

  return comments;
};
