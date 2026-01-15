import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'

function PostDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [post, setPost] = useState(null)
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(0)

  useEffect(() => {
    const savedUser = localStorage.getItem('user')
    if (!savedUser) {
      navigate('/login')
      return
    }
    setUser(JSON.parse(savedUser))
  }, [navigate])

  useEffect(() => {
    if (user) {
      fetchPost()
      fetchComments()
      checkLikeStatus()
      incrementViewCount()
    }
  }, [id, user])

  const fetchPost = async () => {
    try {
      const { data, error } = await supabase
        .from('posts')
        .select(`
          *,
          users:author_id (nickname)
        `)
        .eq('id', id)
        .single()

      if (error) throw error
      setPost(data)

      const { count } = await supabase
        .from('likes')
        .select('*', { count: 'exact', head: true })
        .eq('post_id', id)

      setLikeCount(count || 0)
    } catch (err) {
      console.error('Error fetching post:', err)
      navigate('/board')
    } finally {
      setLoading(false)
    }
  }

  const fetchComments = async () => {
    try {
      const { data, error } = await supabase
        .from('comments')
        .select(`
          *,
          users:author_id (nickname)
        `)
        .eq('post_id', id)
        .order('created_at', { ascending: true })

      if (error) throw error
      setComments(data || [])
    } catch (err) {
      console.error('Error fetching comments:', err)
    }
  }

  const checkLikeStatus = async () => {
    if (!user) return

    try {
      const { data, error } = await supabase
        .from('likes')
        .select('*')
        .eq('post_id', id)
        .eq('user_id', user.id)
        .single()

      setLiked(!!data)
    } catch (err) {
      setLiked(false)
    }
  }

  const incrementViewCount = async () => {
    try {
      await supabase
        .from('posts')
        .update({ view_count: (post?.view_count || 0) + 1 })
        .eq('id', id)
    } catch (err) {
      console.error('Error incrementing view count:', err)
    }
  }

  const handleLike = async () => {
    if (!user) return

    try {
      if (liked) {
        await supabase
          .from('likes')
          .delete()
          .eq('post_id', id)
          .eq('user_id', user.id)

        setLiked(false)
        setLikeCount((prev) => prev - 1)
      } else {
        await supabase
          .from('likes')
          .insert([{ post_id: id, user_id: user.id }])

        setLiked(true)
        setLikeCount((prev) => prev + 1)
      }
    } catch (err) {
      console.error('Error toggling like:', err)
    }
  }

  const handleCommentSubmit = async (e) => {
    e.preventDefault()

    if (!newComment.trim()) return

    try {
      const { error } = await supabase
        .from('comments')
        .insert([
          {
            post_id: id,
            author_id: user.id,
            content: newComment.trim(),
          },
        ])

      if (error) throw error

      setNewComment('')
      fetchComments()
    } catch (err) {
      console.error('Error adding comment:', err)
    }
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

  if (!post) {
    return <div className="loading">게시물을 찾을 수 없습니다.</div>
  }

  return (
    <div className="post-detail-container">
      <header className="board-header">
        <div className="header-left">
          <Link to="/board" className="back-link">
            <span className="logo-emoji">🥕</span>
            <span className="logo-text">CarrotMarket</span>
          </Link>
        </div>
      </header>

      <main className="post-detail-main">
        <article className="post-article">
          <div className="post-header">
            <h1 className="post-title">{post.title}</h1>
            <div className="post-meta">
              <span className="post-author">{post.users?.nickname}</span>
              <span className="post-date">{formatDate(post.created_at)}</span>
            </div>
          </div>

          <div className="post-content">
            <p>{post.content}</p>
          </div>

          <div className="post-price-display">
            <span className="price-label">상품 가격</span>
            <span className="price-value">{formatPrice(post.price)}</span>
          </div>

          <div className="post-actions">
            <button
              onClick={handleLike}
              className={`btn-like ${liked ? 'liked' : ''}`}
            >
              {liked ? '❤️' : '🤍'} 좋아요 {likeCount}
            </button>
            <Link to="/board" className="btn-secondary">
              뒤로가기
            </Link>
          </div>
        </article>

        <section className="comments-section">
          <h3>댓글 ({comments.length})</h3>

          <div className="comments-list">
            {comments.length === 0 ? (
              <div className="no-comments">아직 댓글이 없습니다.</div>
            ) : (
              comments.map((comment) => (
                <div key={comment.id} className="comment-item">
                  <div className="comment-header">
                    <span className="comment-author">
                      {comment.users?.nickname}
                    </span>
                    <span className="comment-date">
                      {formatDate(comment.created_at)}
                    </span>
                  </div>
                  <div className="comment-content">{comment.content}</div>
                </div>
              ))
            )}
          </div>

          <form onSubmit={handleCommentSubmit} className="comment-form">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="댓글을 입력하세요"
              rows={3}
            />
            <button type="submit" className="btn-primary">
              댓글 등록
            </button>
          </form>
        </section>
      </main>
    </div>
  )
}

export default PostDetail
