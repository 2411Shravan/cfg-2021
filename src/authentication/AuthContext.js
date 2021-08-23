import React,{useContext,useState,useEffect} from 'react'
import {auth} from './firebase'
import { db } from './firebase'


const AuthContext = React.createContext()


export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const[currentUser,setcurrentUser] = useState();
    const[loading,setloading]=useState(false);

    function signup(email,password,uname,phnum,age) {
        return auth.createUserWithEmailAndPassword(email,password).then(credentials=>{
            db.collection('user').doc(credentials.user.uid).set({
                username:uname,
                phonenumber:phnum,
                userage:age
            })
        })
    }


   function login(email,password){
        return auth.signInWithEmailAndPassword(email,password)
   }

    function logout(){
      return auth.signOut()
    }

        function resetPassword(email){
        return auth.sendPasswordResetEmail(email)
         }

         function updatePassword(password){
            return currentUser.updatePassword(password)
        }
    
        function updateEmail(email){
            return currentUser.updateEmail(email)
        }
    


useEffect(()=>{
  const datauser= auth.onAuthStateChanged(user=>{
    setcurrentUser(user)
    setloading(false)
        
    })
    return datauser
},[])
    

    const value={
        currentUser,
        login,
        signup,
        logout,
        resetPassword,
        updatePassword,
        updateEmail
    }


    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}