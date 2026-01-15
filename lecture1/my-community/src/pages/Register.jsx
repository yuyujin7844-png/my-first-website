import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'

function Register() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [nickname, setNickname] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)
  const [usernameChecked, setUsernameChecked] = useState(false)
  const [usernameAvailable, setUsernameAvailable] = useState(false)
  const navigate = useNavigate()

  const passwordRules = [
    { rule: '8자 이상', check: (pw) => pw.length >= 8 },
    { rule: '영문 포함', check: (pw) => /[a-zA-Z]/.test(pw) },
    { rule: '숫자 포함', check: (pw) => /[0-9]/.test(pw) },
  ]

  const checkUsername = async () => {
    if (!username) {
      setError('아이디를 입력해주세요.')
      return
    }

    setLoading(true)
    try {
      const { data, error: fetchError } = await supabase
        .from('users')
        .select('username')
        .eq('username', username)

      if (fetchError) throw fetchError

      if (data && data.length > 0) {
        setError('이미 사용 중인 아이디입니다.')
        setUsernameAvailable(false)
      } else {
        setSuccess('사용 가능한 아이디입니다.')
        setError('')
        setUsernameAvailable(true)
      }
      setUsernameChecked(true)
    } catch (err) {
      setError('중복 확인 중 오류가 발생했습니다.')
    } finally {
      setLoading(false)
    }
  }

  const handleRegister = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    if (!usernameChecked || !usernameAvailable) {
      setError('아이디 중복 확인을 해주세요.')
      return
    }

    const allRulesPassed = passwordRules.every((r) => r.check(password))
    if (!allRulesPassed) {
      setError('비밀번호 규칙을 모두 충족해주세요.')
      return
    }

    if (!nickname) {
      setError('닉네임을 입력해주세요.')
      return
    }

    setLoading(true)
    try {
      const { error: insertError } = await supabase
        .from('users')
        .insert([{ username, password, nickname }])

      if (insertError) throw insertError

      alert('회원가입이 완료되었습니다!')
      navigate('/login')
    } catch (err) {
      setError('회원가입 중 오류가 발생했습니다.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>회원가입</h2>

        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}

        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label>아이디</label>
            <div className="input-with-button">
              <input
                type="text"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value)
                  setUsernameChecked(false)
                  setUsernameAvailable(false)
                }}
                placeholder="아이디를 입력하세요"
                required
              />
              <button
                type="button"
                onClick={checkUsername}
                disabled={loading}
                className="btn-secondary"
              >
                중복확인
              </button>
            </div>
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
            <div className="password-rules">
              {passwordRules.map((r, idx) => (
                <span
                  key={idx}
                  className={`rule ${password ? (r.check(password) ? 'valid' : 'invalid') : 'inactive'}`}
                >
                  {r.check(password) ? '✓' : '○'} {r.rule}
                </span>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>닉네임</label>
            <input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="닉네임을 입력하세요"
              required
            />
          </div>

          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? '가입 중...' : '회원가입'}
          </button>
        </form>

        <Link to="/login" className="btn-link">
          로그인으로 돌아가기
        </Link>
      </div>
    </div>
  )
}

export default Register
