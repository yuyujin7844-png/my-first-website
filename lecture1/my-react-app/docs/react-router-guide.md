# React Router Guide

## 개요
React Router는 React 애플리케이션에서 라우팅을 구현하기 위한 표준 라이브러리입니다.

## 기본 설정

### 설치
```bash
npm install react-router-dom
```

### 기본 구조

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
```

## 주요 컴포넌트

### BrowserRouter
- HTML5 History API를 사용하는 라우터
- 애플리케이션의 최상위에 배치

```jsx
import { BrowserRouter } from 'react-router-dom';

<BrowserRouter>
  <App />
</BrowserRouter>
```

### Routes와 Route
- Routes: 여러 Route를 감싸는 컨테이너
- Route: 경로와 컴포넌트를 매핑

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/products" element={<Products />} />
  <Route path="/products/:id" element={<ProductDetail />} />
</Routes>
```

### Link
- 페이지 새로고침 없이 네비게이션
- HTML의 `<a>` 태그 대체

```jsx
import { Link } from 'react-router-dom';

<Link to="/">Home</Link>
<Link to="/about">About</Link>
```

### NavLink
- 활성 링크에 스타일 적용 가능

```jsx
import { NavLink } from 'react-router-dom';

<NavLink
  to="/about"
  className={({ isActive }) => isActive ? 'active' : ''}
>
  About
</NavLink>
```

## Hooks

### useNavigate
- 프로그래밍 방식으로 네비게이션

```jsx
import { useNavigate } from 'react-router-dom';

function LoginButton() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // 로그인 로직
    navigate('/dashboard');
  };

  return <button onClick={handleLogin}>Login</button>;
}
```

### useParams
- URL 파라미터 접근

```jsx
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();

  return <div>Product ID: {id}</div>;
}

// Route: <Route path="/products/:id" element={<ProductDetail />} />
// URL: /products/123
```

### useLocation
- 현재 위치 정보 접근

```jsx
import { useLocation } from 'react-router-dom';

function CurrentPath() {
  const location = useLocation();

  return <div>Current Path: {location.pathname}</div>;
}
```

### useSearchParams
- URL 쿼리 파라미터 관리

```jsx
import { useSearchParams } from 'react-router-dom';

function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('q');

  return (
    <div>
      Search Query: {query}
      <button onClick={() => setSearchParams({ q: 'new search' })}>
        Update Search
      </button>
    </div>
  );
}

// URL: /search?q=react
```

## 중첩 라우팅

```jsx
<Routes>
  <Route path="/dashboard" element={<Dashboard />}>
    <Route path="profile" element={<Profile />} />
    <Route path="settings" element={<Settings />} />
  </Route>
</Routes>

// Dashboard 컴포넌트 내에서
import { Outlet } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet /> {/* 중첩된 라우트가 여기에 렌더링 */}
    </div>
  );
}
```

## 보호된 라우트

```jsx
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children, isAuthenticated }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

// 사용
<Route
  path="/dashboard"
  element={
    <ProtectedRoute isAuthenticated={isLoggedIn}>
      <Dashboard />
    </ProtectedRoute>
  }
/>
```

## 404 페이지

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

## Lazy Loading

```jsx
import { lazy, Suspense } from 'react';

const About = lazy(() => import('./pages/About'));

<Routes>
  <Route path="/" element={<Home />} />
  <Route
    path="/about"
    element={
      <Suspense fallback={<div>Loading...</div>}>
        <About />
      </Suspense>
    }
  />
</Routes>
```

## Layout 패턴

```jsx
function Layout() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
}

<Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
  </Route>
</Routes>
```

## 프로그래밍 네비게이션 패턴

```jsx
// 뒤로 가기
navigate(-1);

// 앞으로 가기
navigate(1);

// 특정 경로로 이동
navigate('/home');

// 상태와 함께 이동
navigate('/profile', { state: { from: 'dashboard' } });

// replace 모드 (히스토리 스택에 추가하지 않음)
navigate('/login', { replace: true });
```

## 베스트 프랙티스

1. **라우트 구조 계획**: 명확한 URL 구조 설계
2. **중첩 라우트 활용**: 공통 레이아웃 재사용
3. **Lazy Loading 사용**: 초기 로딩 속도 개선
4. **보호된 라우트 구현**: 인증 필요 페이지 보호
5. **404 페이지 제공**: 사용자 경험 개선
6. **의미 있는 경로 사용**: SEO 및 사용성 향상
7. **replace 옵션 적절히 사용**: 히스토리 관리

## 일반적인 라우트 구조 예시

```jsx
<BrowserRouter>
  <Routes>
    {/* Public Routes */}
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Route>

    {/* Protected Routes */}
    <Route path="/dashboard" element={<ProtectedLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="profile" element={<Profile />} />
      <Route path="settings" element={<Settings />} />
    </Route>

    {/* 404 */}
    <Route path="*" element={<NotFound />} />
  </Routes>
</BrowserRouter>
```
