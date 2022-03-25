import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const loginRequest = (email, password) => {
  const auth = getAuth();
  console.log("Loginrequest ", email, password);
  return signInWithEmailAndPassword(auth, email, password).then((result) =>
    console.log(result).catch((e) => console.log("firebase error", e))
  );
};
