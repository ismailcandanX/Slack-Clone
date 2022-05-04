import { Button } from '@mui/material'
import React from 'react'
import './ChatInput.css'
import db from '../firebase'
import { serverTimestamp } from 'firebase/firestore'

import { useStateValue } from '../StateProvider'

function ChatInput({ channelName, channelId }) {
  const [input, setInput] = React.useState('')
  const [{ user }] = useStateValue()
  const sendMessage = (e) => {
    e.preventDefault()
    if (channelId) {
      if (input !== '') {
        db.collection('rooms').doc(channelId).collection('messages').add({
          message: input,
          timestamp: serverTimestamp(),
          user: user.displayName,
          userImage: user.photoURL,
        })
      }
    }
  }
  return (
    <div className="chatInput">
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder={`Message #${channelName?.toLowerCase()}`}
        />
        <Button type="submit" onClick={sendMessage}>
          Send
        </Button>
      </form>
    </div>
  )
}

export default ChatInput
