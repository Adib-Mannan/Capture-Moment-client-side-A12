import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // Google log in and register
    const signInWithGoogle = (location, history) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                // save user in database 
                saveUser(user.email, user.displayName, 'PUT');
                const destination = location?.state?.from || '/';
                history.push(destination);
                setError('')

            }).catch((error) => {
                setError(error.message);
            })
            .finally(() => { setIsLoading(false) });
    }

    //register or create user with email password name
    const registerUser = (email, password, name, location, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                setError('')
                const newUser = { email, displayName: name }
                setUser(newUser);
                // save user to the database 
                saveUser(email, name, 'POST')
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });

                const destination = location?.state?.from || '/';
                history.push(destination);
            })
            .catch((error) => {
                setError(error.message);

            })
            .finally(() => { setIsLoading(false) });
    }
    // log in or sign in using email and password
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                const destination = location?.state?.from || '/';
                history.push(destination);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => { setIsLoading(false) });
    }
    // logOut 
    const logout = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }
    // observer user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                // ...
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribe;
    }, [auth]);

    // save user in database 
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://polar-ravine-29494.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }
    // admin check 
    useEffect(() => {
        fetch(`https://polar-ravine-29494.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin)
            })
    }, [user.email])

    return { user, admin, isLoading, error, setError, registerUser, loginUser, logout, signInWithGoogle }
}

export default useFirebase;