# MUI Components Guide

## 개요
Material-UI (MUI)는 Google의 Material Design을 구현한 React 컴포넌트 라이브러리입니다.

## 주요 컴포넌트

### 1. Layout Components

#### Box
- 가장 기본적인 컨테이너 컴포넌트
- sx prop을 통해 스타일링

```jsx
import { Box } from '@mui/material';

<Box sx={{ p: 2, m: 1, bgcolor: 'background.paper' }}>
  Content here
</Box>
```

#### Container
- 중앙 정렬된 컨테이너 제공
- 반응형 maxWidth 지원

```jsx
import { Container } from '@mui/material';

<Container maxWidth="lg">
  <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
</Container>
```

#### Grid
- 반응형 레이아웃 시스템
- 12칼럼 그리드 기반

```jsx
import { Grid } from '@mui/material';

<Grid container spacing={2}>
  <Grid item xs={12} sm={6} md={4}>
    <Item>xs=12 sm=6 md=4</Item>
  </Grid>
</Grid>
```

### 2. Navigation Components

#### AppBar
- 상단 네비게이션 바

```jsx
import { AppBar, Toolbar, Typography } from '@mui/material';

<AppBar position="static">
  <Toolbar>
    <Typography variant="h6">
      My App
    </Typography>
  </Toolbar>
</AppBar>
```

#### Drawer
- 사이드 네비게이션 메뉴

```jsx
import { Drawer, List, ListItem } from '@mui/material';

<Drawer anchor="left" open={open} onClose={toggleDrawer}>
  <List>
    <ListItem button>Menu Item 1</ListItem>
  </List>
</Drawer>
```

### 3. Input Components

#### TextField
- 텍스트 입력 필드

```jsx
import { TextField } from '@mui/material';

<TextField
  label="Email"
  variant="outlined"
  fullWidth
  required
/>
```

#### Button
- 다양한 스타일의 버튼

```jsx
import { Button } from '@mui/material';

<Button variant="contained" color="primary">
  Click Me
</Button>
```

#### Select
- 드롭다운 선택 메뉴

```jsx
import { Select, MenuItem } from '@mui/material';

<Select value={age} onChange={handleChange}>
  <MenuItem value={10}>Ten</MenuItem>
  <MenuItem value={20}>Twenty</MenuItem>
</Select>
```

### 4. Data Display Components

#### Card
- 콘텐츠 카드

```jsx
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

<Card>
  <CardMedia
    component="img"
    height="140"
    image="/image.jpg"
  />
  <CardContent>
    <Typography variant="h5">Title</Typography>
  </CardContent>
</Card>
```

#### Table
- 데이터 테이블

```jsx
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

<Table>
  <TableHead>
    <TableRow>
      <TableCell>Name</TableCell>
      <TableCell>Age</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableCell>John</TableCell>
      <TableCell>25</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

### 5. Feedback Components

#### Alert
- 알림 메시지

```jsx
import { Alert } from '@mui/material';

<Alert severity="success">
  Operation successful!
</Alert>
```

#### Dialog
- 모달 다이얼로그

```jsx
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

<Dialog open={open} onClose={handleClose}>
  <DialogTitle>Dialog Title</DialogTitle>
  <DialogContent>
    Dialog content
  </DialogContent>
  <DialogActions>
    <Button onClick={handleClose}>Close</Button>
  </DialogActions>
</Dialog>
```

#### Snackbar
- 하단 알림 바

```jsx
import { Snackbar } from '@mui/material';

<Snackbar
  open={open}
  autoHideDuration={6000}
  onClose={handleClose}
  message="Note archived"
/>
```

## Theming

### 테마 커스터마이징

```jsx
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>
```

## Styling

### sx prop 사용

```jsx
<Box
  sx={{
    width: 300,
    height: 300,
    backgroundColor: 'primary.main',
    '&:hover': {
      backgroundColor: 'primary.dark',
    },
  }}
/>
```

### styled API 사용

```jsx
import { styled } from '@mui/material/styles';

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));
```

## 반응형 디자인

### Breakpoints 사용

```jsx
<Box
  sx={{
    width: {
      xs: '100%',    // 0px ~ 600px
      sm: '50%',     // 600px ~ 900px
      md: '33.33%',  // 900px ~ 1200px
      lg: '25%',     // 1200px ~ 1536px
      xl: '20%',     // 1536px ~
    },
  }}
/>
```

## 아이콘 사용

```jsx
import { Home, Settings, AccountCircle } from '@mui/icons-material';

<Home />
<Settings color="primary" />
<AccountCircle fontSize="large" />
```

## 베스트 프랙티스

1. **일관된 간격 사용**: theme.spacing() 활용
2. **색상은 테마에서 관리**: 직접 색상 코드 사용 지양
3. **반응형 디자인 고려**: breakpoints 적극 활용
4. **접근성 준수**: aria-label, alt 속성 사용
5. **재사용 가능한 컴포넌트 작성**: 공통 컴포넌트 분리
