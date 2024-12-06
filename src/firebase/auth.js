import {auth } from './firebase';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword, GoogleAuthProvider, sendPasswordResetEmail, signInWithPopup, updateEmail, updatePassword, updateProfile} from 'firebase/auth';

export const  doCreateUserWithEmailAndPassword = async (email,password,displayName) =>{

    const {user} = await createUserWithEmailAndPassword(auth,email,password);
    if(displayName){
        await updateProfile(user,{displayName})
    }
    return user;
};
export const doSignInWithEmailAndPassword = async  (email,password) =>{
    return await signInWithEmailAndPassword(auth,email,password);
};
export const doSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = signInWithPopup(auth,provider);

    return await result;
};
export const doSignOut = async () => {
    return auth.signOut();
}
// export const doPasswordReset = (email) => {
//     sendPasswordResetEmail(auth,email);
// }
// export const doPasswordChange = (password) => {
//     updatePassword(auth.currentUser,password);
// }