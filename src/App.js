import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Chat from './components/Chat'
import Login from './components/Login'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useStateValue } from './StateProvider'


function App() {
  const [{ user }, dispatch] = useStateValue()

  return (
    <div className="App">
      <BrowserRouter>
        {!user ? (
          <Login  />
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
