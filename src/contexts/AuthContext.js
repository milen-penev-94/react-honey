import React, { useContext, useState, useEffect } from "react"
import { auth, db } from "../firebase"
import { collection, where, query, getDocs, doc, getDoc, updateDoc } from "firebase/firestore"

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [currentUserData, setCurrentUserData] = useState({})
  const [loading, setLoading] = useState(true)

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function logout() {
    return auth.signOut()
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }

  const getUser = async (user) => {
    const userDataQuery = query(collection(db, "userData"), where("userId", "==", user.uid));
    const userDataSnapshot = await getDocs(userDataQuery);

    if (!userDataSnapshot.empty) {
      userDataSnapshot.forEach((doc) => {
        setCurrentUserData(doc.data())        
      });
    } else {

      const userDataQuery = query(collection(db, "userData"), where("userId", "==", user.uid));
      const userDataSnapshot = await getDocs(userDataQuery);

      if (userDataSnapshot.empty) {
          let name = null;
          let lastName = null
          let city = null;
          let address= null
          let age = null
          let phone = null
          let userId = user.uid
          let isAdmin = false

          let userDataCollection = db.collection('userData')
          .doc()

          let newUserData = {
              name,
              lastName,
              city,
              address,
              age,
              phone,
              userId,
              isAdmin
          }

          userDataCollection.set({
              ...newUserData
          })
      }
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)

      if(user){
        getUser(user);
      }
    
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    currentUserData,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword
  }

  return (
    <AuthContext.Provider value={value}>
       {!loading && children}
   </AuthContext.Provider>
  )
}