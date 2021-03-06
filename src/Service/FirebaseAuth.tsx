import {
  createUserWithEmailAndPassword,
  getRedirectResult,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithRedirect,
  signOut,
  updateProfile,
} from "firebase/auth";
import { authService } from "../firebase_config";

export async function registerWithEamil(
  email: string,
  password: string,
  nickname: string
) {
  try {
    await createUserWithEmailAndPassword(authService, email, password).then(
      (e) => {
        alert("Complete create an account! Welcome!");
        if (authService.currentUser !== null)
          updateProfile(authService.currentUser, { displayName: nickname });
      }
    );
  } catch (e: any) {
    return e.message.replace("Firebase: ", "");
  }
}

export async function loginWithEamil(email: string, password: string) {
  try {
    await signInWithEmailAndPassword(authService, email, password);
  } catch (e: any) {
    return e.message.replace("Firebase: ", "");
  }
}

export async function loginWithSocial(provider: any) {
  if (provider === "google") {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithRedirect(authService, provider);
      const result = await getRedirectResult(authService);
      if (result) {
        // const user = result.user;
        // const credential = provider.credentialFromResult(authService, result);
        // const token = credential.accessToken;
      }
      return;
    } catch (error) {
      return error;
    }
    // const operationType = result.operationType;
  } else if (provider === "github") {
    try {
      const provider = new GithubAuthProvider();

      await signInWithRedirect(authService, provider);
      const result = await getRedirectResult(authService);
      if (result) {
        // const user = result.user;
        // const credential = provider.credentialFromResult(authService, result);
        // const token = credential.accessToken;
      }
      // const operationType = result.operationType;
      return;
    } catch (error) {
      return error;
    }
  }
}

export async function logout() {
  await signOut(authService);
  return;
}
