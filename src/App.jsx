import { Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Landing from './pages/Landing'
import Header from './components/Header'
import Footer from './components/Footer'
import ViewAll from './pages/ViewAll'
import Category from './components/Category'
import Login from './pages/Login'
import Account from './components/Account'
import Password from './components/Password'
import Cart from './components/Cart'
import IndoorPlants from './components/IndoorPlants'
import OutdoorPlants from './components/OutdoorPlants'
import Admin from './components/Admin'
import Pnf from './components/Pnf'
import Cactus from './components/Cactus'
import AirPurifyingPlants from './components/AirPurifyingPlants'
import Adeniums from './components/Adeniums'
import AquaticPlants from './components/AquaticPlants'
import Edit from './components/Edit'
import Checkout from './pages/Checkout'

const ProtectedRoute = ({ children }) => {
  const token = sessionStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const AdminRoute = ({ children }) => {
  const token = sessionStorage.getItem("token");
  const user = JSON.parse(sessionStorage.getItem("user"));
  
  if (!token || user?.role !== 'admin') {
    return <Navigate to="/login" replace />;
  }
  return children;
};

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* Unprotected Routes */}
        <Route path='/' element={< Landing />} />
        <Route path='/login' element={< Login />} />
        <Route path='/account' element={< Account />} />
        <Route path='/password' element={< Password />} />

        {/* Protected Routes */}
        <Route path='/home' element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path='/all product' element={<ProtectedRoute><ViewAll /></ProtectedRoute>} />
        <Route path='/category' element={<ProtectedRoute><Category /></ProtectedRoute>} />
        <Route path='/viewall' element={<ProtectedRoute><ViewAll /></ProtectedRoute>} />
        <Route path='/cart' element={<ProtectedRoute><Cart /></ProtectedRoute>} />
        <Route path='/indoor plants' element={<ProtectedRoute><IndoorPlants /></ProtectedRoute>} />
        <Route path='/outdoor plants' element={<ProtectedRoute><OutdoorPlants /></ProtectedRoute>} />
        <Route path='/admin' element={<AdminRoute><Admin /></AdminRoute>} />
        <Route path='/adeniums' element={<ProtectedRoute><Adeniums /></ProtectedRoute>} />
        <Route path='/aquaticPlants' element={<ProtectedRoute><AquaticPlants /></ProtectedRoute>} />
        <Route path='/airPurifyingPlants' element={<ProtectedRoute><AirPurifyingPlants /></ProtectedRoute>} />
        <Route path='/cactus' element={<ProtectedRoute><Cactus /></ProtectedRoute>} />
        <Route path='/edit' element={<ProtectedRoute><Edit /></ProtectedRoute>} />
        <Route path='/checkout' element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
        
        {/* Fallback */}
        <Route path='*' element={<Pnf />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
