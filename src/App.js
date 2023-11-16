import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../src/components/Dashboard/Dashboard';
import Login from '../src/components/Login/Login';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState(true)
  const [email, setEmail] = useState("")

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))

    if (!user || !user.token) {
      setLoggedIn(false)
      return
    }
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
          <Route path="/" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;