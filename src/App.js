import './index.css'
import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { CheckSession } from './services/Auth'
import Home from './Pages/Home'
import Welcome from './Pages/Welcome'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Zodiacs from './Pages/Zodiacs'
import ZodiacDetails from './Pages/ZodiacDetails'
import NewReviewForm from './Pages/NewReviewForm'
import EditReviewForm from './Pages/EditReviewForm'
import User from './components/User'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Profile from './Pages/Profile'
import AboutUs from './Pages/AboutUs'
import UserPage from './Pages/UserPage'

function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div>
      <div>
        <header>
          <Nav
            authenticated={authenticated}
            user={user}
            handleLogOut={handleLogOut}
          />
        </header>
        <main>
          <Routes>
            <Route
              index
              element={<Home user={user} authenticated={authenticated} />}
            />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/zodiacs" element={<Zodiacs />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/profile"
              element={<Profile user={user} authenticated={authenticated} />}
            />
            <Route
              path="/login"
              element={
                <Login
                  setUser={setUser}
                  toggleAuthenticated={toggleAuthenticated}
                />
              }
            />
            <Route path="/user_details/:user_id" element={<User />} />
            <Route
              path="/user_details/:userId/user_profile"
              element={<UserPage />}
            />
            <Route
              path="/zodiacs/details/:zodiacId"
              element={<ZodiacDetails user={user} />}
            />
            <Route
              path="/edit_review/user_id/:userId/zodiac_id/:zodiacId/review_id/:reviewId"
              element={<EditReviewForm />}
            />
            <Route
              path="/new_review/user_id/:userId/zodiac_id/:zodiacId"
              element={
                <NewReviewForm user={user} authenticated={authenticated} />
              }
            />
            <Route path="/about_us" element={<AboutUs />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  )
}

export default App
