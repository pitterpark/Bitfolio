import {
  push,
  ref,
  set,
  child,
  get,
  limitToLast,
  onValue,
  orderByChild,
  query,
  remove,
} from "@firebase/database";
import {
  addDoc,
  collection,
  deleteDoc,
  deleteField,
  doc,
  getDoc,
  setDoc,
  Timestamp,
} from "@firebase/firestore";
import { authService, dbService, realtimeDbService } from "../firebase_config";

export async function sendChatMessage(cryptoId, message) {
  const locate = ref(realtimeDbService, `chat/${cryptoId}/`);
  push(locate, {
    uid: authService.currentUser.uid,
    name: authService.currentUser.displayName,
    message,
    createdAt: Timestamp.fromDate(new Date()),
  });
}

export async function getChatMessages(cryptoId, callBack) {
  const chatRef = query(
    ref(realtimeDbService, `chat/${cryptoId}/`),
    orderByChild("createdAt"),
    limitToLast(50)
  );
  onValue(chatRef, (snapshot) => {
    callBack(snapshot.val());
  });
}

export async function delChatMessage(cryptoId, docKey) {
  remove(ref(realtimeDbService, `chat/${cryptoId}/${docKey}`));
}

export async function setFavoritesToDB(cryptoId, value) {
  const ref = doc(dbService, "User", authService.currentUser.uid);
  if (value) setDoc(ref, { [cryptoId]: value }, { merge: true });
  else
    setDoc();
    //TODO: delete
}

export async function getFavorites() {
  const ref = doc(dbService, "User", authService.currentUser.uid);
  let res = await getDoc(ref);
  return res.data();
}
