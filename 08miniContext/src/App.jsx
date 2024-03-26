import './App.css'
import Login from './components/Login'
import Profilr from './components/Profilr'
import UserConextProvider from './context/UserContextProvider'

function App() {
  

  return (
    <UserConextProvider>
      <h1>React with Zaki and Share is import</h1>
      <Login/>
      <Profilr/>
    </UserConextProvider>
  )
}

export default App
