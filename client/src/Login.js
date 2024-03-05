import React, {Component} from "react"
import withFirebaseAuth from "react-with-firebase-auth"
import * as firebase from "firebase/app"
import "firebase/auth"
import firebaseConfig from "./Firebase"

const firebaseApp = firebase.initializeApp(firebaseConfig)

class login extends Component{
    render(){
        const {user,signOut, signWithGoogle}= this.props;
        return(
            <div>
                {
                 user ? <p>Hola, {user.displayName}</p>
                 :  <p>Por Favor, Iniciar Sesión</p> 
                }
                {
                user ? <button onClic={signOut}>Cerra Sesión</button>
                 : <button onClic={signWithGoogle}>Iniciar Sesión con Google</button>
                }
            </div>
        )
    }
}

const firebaseAppAuth =firebaseApp.auth();
const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
}

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
    })(login);