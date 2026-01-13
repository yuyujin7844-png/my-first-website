# React Best Practices

## 프로젝트 구조

### 권장 폴더 구조

```
src/
├── components/        # 재사용 가능한 컴포넌트
│   ├── common/       # 공통 컴포넌트
│   └── layout/       # 레이아웃 컴포넌트
├── pages/            # 페이지 컴포넌트
├── hooks/            # 커스텀 훅
├── utils/            # 유틸리티 함수
├── services/         # API 호출 함수
├── context/          # Context API
├── assets/           # 이미지, 폰트 등
├── styles/           # 글로벌 스타일
└── App.jsx
```

## 컴포넌트 설계

### 1. 함수형 컴포넌트 사용

```jsx
// Good
function UserProfile({ name, email }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

// Avoid (클래스 컴포넌트)
class UserProfile extends React.Component {
  render() {
    return <div>...</div>;
  }
}
```

### 2. Props 구조 분해

```jsx
// Good
function Button({ text, onClick, disabled }) {
  return <button onClick={onClick} disabled={disabled}>{text}</button>;
}

// Avoid
function Button(props) {
  return <button onClick={props.onClick}>{props.text}</button>;
}
```

### 3. PropTypes 또는 TypeScript 사용

```jsx
import PropTypes from 'prop-types';

function User({ name, age, email }) {
  return <div>...</div>;
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  email: PropTypes.string.isRequired,
};

User.defaultProps = {
  age: 0,
};
```

### 4. 컴포넌트 분리

```jsx
// Good - 작은 컴포넌트로 분리
function UserCard({ user }) {
  return (
    <Card>
      <UserAvatar src={user.avatar} />
      <UserInfo name={user.name} email={user.email} />
      <UserActions userId={user.id} />
    </Card>
  );
}

// Avoid - 너무 큰 단일 컴포넌트
function UserCard({ user }) {
  return (
    <Card>
      {/* 100+ lines of code */}
    </Card>
  );
}
```

## State 관리

### 1. useState 적절히 사용

```jsx
// Good - 관련된 상태는 객체로 관리
const [user, setUser] = useState({
  name: '',
  email: '',
  age: 0
});

// Avoid - 너무 많은 개별 state
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [age, setAge] = useState(0);
```

### 2. useReducer 활용

복잡한 상태 로직은 useReducer 사용

```jsx
const initialState = { count: 0, step: 1 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + state.step };
    case 'decrement':
      return { ...state, count: state.count - state.step };
    case 'setStep':
      return { ...state, step: action.payload };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // ...
}
```

### 3. 불필요한 리렌더링 방지

```jsx
// useMemo로 계산 결과 메모이제이션
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);

// useCallback으로 함수 메모이제이션
const handleClick = useCallback(() => {
  doSomething(a, b);
}, [a, b]);

// React.memo로 컴포넌트 메모이제이션
const MemoizedComponent = React.memo(function MyComponent({ data }) {
  return <div>{data}</div>;
});
```

## Side Effects

### 1. useEffect 적절히 사용

```jsx
// Good - 의존성 배열 명시
useEffect(() => {
  fetchData(userId);
}, [userId]);

// Good - cleanup 함수 사용
useEffect(() => {
  const subscription = subscribeToData(userId);

  return () => {
    subscription.unsubscribe();
  };
}, [userId]);

// Avoid - 의존성 배열 누락
useEffect(() => {
  fetchData(userId); // 경고 발생
});
```

### 2. 커스텀 훅으로 로직 분리

```jsx
// hooks/useUser.js
function useUser(userId) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const data = await getUserById(userId);
        setUser(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  return { user, loading, error };
}

// 컴포넌트에서 사용
function UserProfile({ userId }) {
  const { user, loading, error } = useUser(userId);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <div>{user.name}</div>;
}
```

## 이벤트 핸들링

### 1. 인라인 함수 피하기

```jsx
// Good
function TodoItem({ todo, onDelete }) {
  const handleDelete = () => {
    onDelete(todo.id);
  };

  return <button onClick={handleDelete}>Delete</button>;
}

// Avoid - 매 렌더링마다 새 함수 생성
function TodoItem({ todo, onDelete }) {
  return <button onClick={() => onDelete(todo.id)}>Delete</button>;
}
```

### 2. 이벤트 전파 제어

```jsx
function Card({ onClick }) {
  const handleButtonClick = (e) => {
    e.stopPropagation(); // 이벤트 버블링 중단
    // 버튼만의 동작
  };

  return (
    <div onClick={onClick}>
      <button onClick={handleButtonClick}>Click Me</button>
    </div>
  );
}
```

## 조건부 렌더링

### 1. 명확한 조건부 렌더링

```jsx
// Good - 명확한 조건
function UserGreeting({ user }) {
  if (!user) {
    return <div>Please log in</div>;
  }

  return <div>Welcome, {user.name}!</div>;
}

// Good - 단순 조건은 &&
function Notifications({ count }) {
  return (
    <div>
      {count > 0 && <Badge count={count} />}
    </div>
  );
}

// Good - 삼항 연산자
function Status({ isActive }) {
  return (
    <div className={isActive ? 'active' : 'inactive'}>
      {isActive ? 'Online' : 'Offline'}
    </div>
  );
}
```

## 리스트 렌더링

### 1. key prop 올바르게 사용

```jsx
// Good - 고유한 id 사용
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}

// Avoid - index를 key로 사용 (순서 변경 시 문제)
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo.text}</li>
      ))}
    </ul>
  );
}
```

## API 호출

### 1. 비동기 처리 패턴

```jsx
function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch('/api/users');

        if (!response.ok) {
          throw new Error('Failed to fetch');
        }

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return <UserListView users={users} />;
}
```

### 2. API 서비스 분리

```jsx
// services/api.js
export const userAPI = {
  getAll: async () => {
    const response = await fetch('/api/users');
    return response.json();
  },

  getById: async (id) => {
    const response = await fetch(`/api/users/${id}`);
    return response.json();
  },

  create: async (userData) => {
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
    return response.json();
  },
};

// 컴포넌트에서 사용
import { userAPI } from './services/api';

function UserList() {
  useEffect(() => {
    const fetchUsers = async () => {
      const data = await userAPI.getAll();
      setUsers(data);
    };
    fetchUsers();
  }, []);
}
```

## 성능 최적화

### 1. 코드 분할

```jsx
import { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <HeavyComponent />
    </Suspense>
  );
}
```

### 2. 이미지 최적화

```jsx
// 적절한 이미지 포맷 사용
<img
  src="image.webp"
  alt="description"
  loading="lazy"
  width="300"
  height="200"
/>
```

## 접근성 (a11y)

### 1. 시맨틱 HTML 사용

```jsx
// Good
<nav>
  <ul>
    <li><a href="/">Home</a></li>
  </ul>
</nav>

// Avoid
<div>
  <div onClick={navigateHome}>Home</div>
</div>
```

### 2. ARIA 속성 활용

```jsx
<button
  aria-label="Close dialog"
  aria-pressed={isPressed}
  onClick={handleClose}
>
  ✕
</button>
```

## 보안

### 1. XSS 방지

```jsx
// Good - React가 자동으로 이스케이프
<div>{userInput}</div>

// Avoid - dangerouslySetInnerHTML 사용 시 주의
<div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
```

### 2. 민감 정보 관리

```jsx
// .env 파일 사용
VITE_API_URL=https://api.example.com

// 코드에서 사용
const apiUrl = import.meta.env.VITE_API_URL;
```

## 테스팅

### 1. 컴포넌트 테스트

```jsx
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

test('calls onClick when clicked', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click Me</Button>);

  const button = screen.getByText('Click Me');
  fireEvent.click(button);

  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

## 일반 규칙

1. **일관된 명명 규칙**: 컴포넌트는 PascalCase, 함수는 camelCase
2. **주석 작성**: 복잡한 로직에는 설명 추가
3. **ESLint 사용**: 코드 품질 유지
4. **Prettier 사용**: 코드 포맷팅 자동화
5. **작은 컴포넌트**: 단일 책임 원칙 준수
6. **재사용성**: DRY (Don't Repeat Yourself) 원칙
7. **Props drilling 피하기**: Context API 또는 상태 관리 라이브러리 활용
