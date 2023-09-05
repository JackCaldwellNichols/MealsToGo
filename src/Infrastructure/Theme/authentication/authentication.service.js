import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../../../App";

export const loginRequest = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const registerRequest = (email, password, repeatedPassword) =>
  createUserWithEmailAndPassword(auth, email, password, repeatedPassword);
