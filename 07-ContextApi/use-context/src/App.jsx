import { useState } from 'react'
import './App.css'
import AuthContext from "./context/auth-context"
import Auth from './Auth'


function App() {
const [authStatus, setAuthStatus] = useState(false)
const loginAuth = () => {
  setAuthStatus(!authStatus)
}

  return (
    <>
    <AuthContext.Provider value={{status:authStatus, login:loginAuth}}>
      <Auth/>
    </AuthContext.Provider>
    </>
  )
}

export default App
