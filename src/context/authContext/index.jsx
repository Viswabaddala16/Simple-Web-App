    import React,{ useContext, useEffect, useState } from "react";
    import { auth } from '../../firebase/firebase';
    import { onAuthStateChanged } from "firebase/auth";

    const AuthContext = React.createContext();


    export function  AuthProvider({children}){
        const[currentUser,setCurrentUser] = useState(null);
        const[userLoggedIn,setUserLoggedIn] = useState(false);
        

        useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, (user) => {
                if (user) {
                    setUserLoggedIn(true);  // User is logged in
                    setCurrentUser(user);   // Store user details
                } else {
                    setUserLoggedIn(false); // User is logged out
                    setCurrentUser(null);    // Reset user details
                } // store user details
            });

            return () => unsubscribe(); // Clean up on unmount
        }, []);

        const value = {
            currentUser,
            userLoggedIn,
        }
        return(
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        )
    };
    export const useAuth = () => useContext(AuthContext); 
