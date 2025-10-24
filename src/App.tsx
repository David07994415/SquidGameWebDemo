import { Routes, Route } from 'react-router'
import './App.css'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Unknown from './pages/Unknown'
import Stars from './pages/Stars'

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path='/' element={<Home />}></Route>
          <Route path='star'>
            <Route path=":starId" element={<Stars />} />
          </Route>
        </Route>
        <Route path='*' element={<Unknown />}></Route>
      </Routes>
      {/* <MainLayout>
        <Home />
      </MainLayout> */}
    </>
  )
}

export default App
