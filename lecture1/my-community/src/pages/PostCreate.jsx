import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'

function PostCreate() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [price, setPrice] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const savedUser = localStorage.getItem('user')
    if (!savedUser) {
      navigate('/login')
      return
    }
    setUser(JSON.parse(savedUser))
  }, [navigate])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!title.trim()) {
      setError('제목을 입력해주세요.')
      return
    }

    if (!content.trim()) {
      setError('내용을 입력해주세요.')
      return
    }

    setLoading(true)

    try {
      const { data, error: insertError } = await supabase
        .from('posts')
        .insert([
          {
            title: title.trim(),
            content: content.trim(),
            price: parseInt(price) || 0,
            author_id: user.id,
          },
        ])
        .select()
        .single()

      if (insertError) throw insertError

      alert('게시물이 등록되었습니다!')
      navigate('/board')
    } catch (err) {
      setError('게시물 등록 중 오류가 발생했습니다.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="post-create-container">
      <header className="board-header">
        <div className="header-left">
          <Link to="/board" className="back-link">
            <span className="logo-emoji">🥕</span>
            <span className="logo-text">CarrotMarket</span>
          </Link>
        </div>
      </header>

      <main className="post-create-main">
        <h2>게시물 작성</h2>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit} className="post-form">
          <div className="form-group">
            <label>제목</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="제목을 입력하세요"
              maxLength={200}
            />
          </div>

          <div className="form-group">
            <label>내용</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="내용을 입력하세요"
              rows={10}
            />
          </div>

          <div className="form-group">
            <label>상품 가격 (원)</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="가격을 입력하세요"
              min={0}
            />
          </div>

          <div className="form-actions">
            <Link to="/board" className="btn-secondary">
              취소
            </Link>
            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? '등록 중...' : '게시물 등록'}
            </button>
          </div>
        </form>
      </main>
    </div>
  )
}

export default PostCreate
