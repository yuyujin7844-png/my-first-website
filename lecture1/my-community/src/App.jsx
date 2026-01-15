import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Board from './pages/Board'
import PostCreate from './pages/PostCreate'
import PostDetail from './pages/PostDetail'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/board" element={<Board />} />
        <Route path="/post/create" element={<PostCreate />} />
        <Route path="/post/:id" element={<PostDetail />} />
      </Routes>
    </Router>
  )
}

export default App
