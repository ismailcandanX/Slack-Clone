import { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Chat from './components/Chat'

import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [user, setUser] = useState(null)

  return (
    <div className="App">
      <BrowserRouter>
        {!user ? (
          <h1>LOGIN PAGE</h1>
        ) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Routes>
                <Route path="/" element={<h1>Welcome</h1>}></Route>
                <Route path="/room/:roomId" element={<Chat />}></Route>
              </Routes>
            </div>
          </>
        )}
      </BrowserRouter>
    </div>
  )
}

export default App
