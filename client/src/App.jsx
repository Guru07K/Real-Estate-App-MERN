import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import Signin from './pages/Signin'
 import SignUp from './pages/SignUp'
import Header from './components/Header'
import Footer from './components/Footer'
import PrivateRoute from './components/PrivateRoute'

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        
        <Route path='/' element={ <Home/>}/>
        <Route path='/about' element={ <About/>}/>
        <Route path='/signin' element={ <Signin/>}/>
        <Route path='/signup' element={ <SignUp/>}/>

        <Route element={<PrivateRoute/>}>
          <Route path='/profile' element={ <Profile/>}/>
        </Route>

      </Routes>
    <Footer/>
    </BrowserRouter>
  ) 
}

export default App