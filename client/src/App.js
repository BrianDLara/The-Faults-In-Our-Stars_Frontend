import './index.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Nav from './components/Nav'
import Zodiacs from './Pages/Zodiacs'
import ZodiacDetails from './Pages/ZodiacDetails'
import ReviewForm from './Pages/ReviewForm'
import User from './components/User'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Profile from './Pages/Profile'
import AboutUs from './Pages/AboutUs'

function App() {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/zodiacs" element={<Zodiacs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user_details/:user_id" element={<User />} />
          <Route path="/zodiacs/details" element={<ZodiacDetails />} />
          <Route path="/zodiacs/details/form" element={<ReviewForm />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about_us" element={<AboutUs />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
