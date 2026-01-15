import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const { data, error: fetchError } = await supabase
        .from('users')
        .select('*')
        .eq('username', username)
        .eq('password', password)
        .single()

      if (fetchError || !data) {
        setError('아이디 또는 비밀번호가 올바르지 않습니다.')
        setLoading(false)
        return
      }

      localStorage.setItem('user', JSON.stringify(data))
      navigate('/board')
    } catch (err) {
      setError('로그인 중 오류가 발생했습니다.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo">
          <span className="logo-emoji">🥕</span>
          <span className="logo-text">CarrotMarket</span>
        </div>
        <h2>로그인</h2>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>아이디</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="아이디를 입력하세요"
              required
            />
          </div>
          <div className="form-group">
            <label>비밀번호</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호를 입력하세요"
              required
            />
          </div>
          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? '로그인 중...' : '로그인'}
          </button>
        </form>

        <Link to="/register" className="btn-link">
          회원가입하러 가기
        </Link>
      </div>
    </div>
  )
}

export default Login
