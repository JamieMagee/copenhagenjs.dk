import { FirebaseResult, FirebaseResultItem, db } from "../services/firebase";

type User = {
  id?: String;
  email?: String;
  name?: String;
  image: String;
  githubId?: String;
  twitterId?: String;
  instagramId?: String;
  website?: String;
};

export async function getUser(userId): Promise<FirebaseResultItem<User>> {
  const doc = await db
    .collection("users")
    .doc(userId)
    .get();
  return doc;
}

export async function getUsers(): Promise<FirebaseResultItem<User>[]> {
  const doc = await db.collection("users").get();
  return doc.docs;
}

export async function searchUser(key, value): Promise<FirebaseResult<User>> {
  const usersCol = db.collection("users");
  const results = await usersCol.where(key, "==", value).get();
  return results;
}

export async function searchGhostUser(
  key,
  value
): Promise<FirebaseResult<User>> {
  const usersCol = db.collection("ghostusers");
  const results = await usersCol.where(key, "==", value).get();
  return results;
}

export async function updateUser(userId, data) {
  const doc = db.collection("users").doc(userId);
  const update = await doc.set(data, { merge: true });
  return update;
}