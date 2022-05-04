import React from 'react'
import './Login.css'
import { Button } from '@mui/material/'
import {  provider } from '../firebase'
import { getAuth, signInWithPopup } from 'firebase/auth'
import { useStateValue } from '../StateProvider'
import { actionTypes } from '../reducer'
function Login() {
  const [state, dispatch] = useStateValue()
  const signIn = () => {
    const auth = getAuth()
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        })
      })
      .catch((error) => {
        alert(error.message)
      })
  }
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://cdn.bfldr.com/5H442O3W/at/pl546j-7le8zk-afym5u/Slack_Mark_Web.png?auto=webp&format=png"
          alt=""
        />
        <h1>Sign in to Slack Clone</h1>
        <p>
          <strong>Ismail Candan</strong>
        </p>
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  )
}

export default Login
