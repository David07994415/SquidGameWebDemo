import { Routes, Route } from 'react-router'
import './App.css'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Unknown from './pages/Unknown'
import Stars from './pages/Stars'
import AuctionRule from './pages/AuctionRule'
import Admin from './pages/Admin'
import Payment from './pages/Payment'
import Delivery from './pages/Delivery'
import Privacy from './pages/Privacy'
import Refund from './pages/Refund'

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />}></Route>
          <Route path='star'>
            <Route path=":starId" element={<Stars />} />
          </Route>
          <Route path='auctionrule' element={<AuctionRule />}></Route>
          <Route path='payment' element={<Payment />}></Route>
          <Route path='delivery' element={<Delivery />}></Route>
          <Route path='privacy' element={<Privacy />}></Route>
          <Route path='refund' element={<Refund />}></Route>
          <Route path='admin' element={<Admin />}></Route>
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
