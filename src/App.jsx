import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'

import { Route, Routes } from 'react-router-dom'
import { Layout } from './layout/Layout'
import { Home } from './pages/Home'
import { Admin } from './pages/Admin'
import { Add } from './pages/Add'
import { Edit } from './pages/Edit'
import { Favorites } from './pages/Favorites'
import { ToastContainer } from 'react-toastify'


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/add' element={<Add />} />
          <Route path='/edit/:id' element={<Edit />} />
          <Route path='/favorites' element={<Favorites />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
