import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase";

export default function Login({isLogged, setIsLogged}) {
  const [user, setUser] = useState({});


  function logout() {
      localStorage.removeItem('user');
      setIsLogged(false);
  }

  function login() {
      // Provider
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider).then(async (result) => {
          if (result.user) {
              localStorage.setItem('user', JSON.stringify(result.user));
              setIsLogged(true);
              setUser(result.user);
          }
      });
  }

  useEffect(() => {
      const user = localStorage.getItem('user');
      if (user) {
            setIsLogged(true);
            setUser(JSON.parse(user));
      }
  }, []);

  // export user data

  return (
      <>
      {
          isLogged ? (
            //  show user image
            <Button variant="danger" onClick={logout} title='Logout'>
                <i class="bi bi-box-arrow-left"></i>
                <img src={user?user.photoURL : "Not Logged In"} style={{borderRadius: "50%", width: "20%"}}/>
                <span className="ms-2">{user?user.displayName : "Not Logged In"}</span>
              </Button>
          ) : (
              <Button variant="secondary" onClick={login}>
                  <i className="bi bi-google"></i>
                  <span className="ms-2">Login</span>
              </Button>
          )
      }
      </>
  );
}