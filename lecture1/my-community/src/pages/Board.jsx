import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'

function Board() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const savedUser = localStorage.getItem('user')
    if (!savedUser) {
      navigate('/login')
      return
    }
    setUser(JSON.parse(savedUser))
    fetchPosts()
  }, [navigate])

  const fetchPosts = async () => {
    try {
      const { data: postsData, error: postsError } = await supabase
        .from('posts')
        .select(`
          *,
          users:author_id (nickname)
        `)
        .order('created_at', { ascending: false })

      if (postsError) throw postsError

      const postsWithCounts = await Promise.all(
        postsData.map(async (post) => {
          const { count: commentCount } = await supabase
            .from('comments')
            .select('*', { count: 'exact', head: true })
            .eq('post_id', post.id)

          const { count: likeCount } = await supabase
            .from('likes')
            .select('*', { count: 'exact', head: true })
            .eq('post_id', post.id)

          return {
            ...post,
            comment_count: commentCount || 0,
            like_count: likeCount || 0,
          }
        })
      )

      setPosts(postsWithCounts)
    } catch (err) {
      console.error('Error fetching posts:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('user')
    navigate('/login')
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('ko-KR').format(price) + '원'
  }

  if (loading) {
    return <div className="loading">로딩 중...</div>
  }

  return (
    <div className="board-container">
      <header className="board-header">
        <div className="header-left">
          <span className="logo-emoji">🥕</span>
          <span className="logo-text">CarrotMarket</span>
        </div>
        <div className="header-right">
          <span className="welcome-message">{user?.nickname}님 환영해요!</span>
          <button onClick={handleLogout} className="btn-logout">
            로그아웃
          </button>
        </div>
      </header>

      <main className="board-main">
        <div className="board-actions">
          <h2>게시물 목록</h2>
          <Link to="/post/create" className="btn-primary">
            게시물 추가
          </Link>
        </div>

        <div className="post-list">
          {posts.length === 0 ? (
            <div className="no-posts">아직 게시물이 없습니다.</div>
          ) : (
            posts.map((post) => (
              <Link
                to={`/post/${post.id}`}
                key={post.id}
                className="post-card"
              >
                <div className="post-card-header">
                  <h3 className="post-title">{post.title}</h3>
                  <span className="post-price">{formatPrice(post.price)}</span>
                </div>
                <div className="post-card-body">
                  <span className="post-author">{post.users?.nickname}</span>
                  <span className="post-date">{formatDate(post.created_at)}</span>
                </div>
                <div className="post-card-footer">
                  <span className="post-stat">💬 {post.comment_count}</span>
                  <span className="post-stat">👁️ {post.view_count}</span>
                  <span className="post-stat">❤️ {post.like_count}</span>
                </div>
              </Link>
            ))
          )}
        </div>
      </main>
    </div>
  )
}

export default Board
