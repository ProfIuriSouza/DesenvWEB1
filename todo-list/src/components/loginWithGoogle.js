import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase";

function LoginWithGoogle() {
    function login() {
        // Provider
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).then(async (result) => {
            console.log(result.user);

        }).catch((error) => {
            console.log(error);
        });
    }


    return(
        <div>
            <button onClick={login}>Login with Google</button>
        </div>
    );
}

export default LoginWithGoogle;