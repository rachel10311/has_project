//작업에 필요한 라이브러리 불러오기
import React, { Component} from 'react';
import Customer from './components/Customer'
import './App.css';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

//검색창에 값 입력했을때 '학번입력' 대신 사용자가 입력하고 있는 값으로 표시상태 변경해주는 코드
handleValueChange = (e) => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
}

//검색창에 입력한 값을 포함하고 있는 데이터만 표시해주는건데 여기에 뭔가 문제가 있는듯
const filteredComponents = (data) => {
    data = data.filter((c) => {
        return c.name.indexOf(this.state.searchKeyword) > -1;
    });
    return data.mape((c) => {
        return<Customer stateRefresh = {this.stateRefresh} key={c.id} id={c.id} name={c.name} room={c.room} date={c.date} getPost={c.getPost}/>
    });
}

//기본 데이터셋
const customers = [
  {
  'studentId': 23139,
  'name' : '이수현',
  'room' : 'A809',
  'date' : '2023.11.14', 
  'getPost' : 'o'
},
{
  'studentId': 23104,
  'name' : '김유원',
  'room' : 'B901',
  'date' : '2023.11.12', 
  'getPost' : 'x'
},
{
  'studentId': 23142,
  'name' : '송시현',
  'room' : 'A403',
  'date' : '2023.11.13', 
  'getPost' : 'x'
},
{
  'studentId': 23012,
  'name' : '유소연',
  'room' : 'A803',
  'date' : '2023.11.09', 
  'getPost' : 'o'
}
]

//검색창 디자인
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));


//검색창 디자인
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

//검색창 디자인
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

class App extends Component{
  render(){
    const {classes} = this.props;
    return (

    //검색창 디자인
      <div>
        <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            HAS 택배 서비스
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="학번 입력"
              inputProps={{ 'aria-label': 'search' }}
              name = "searchKeyword"
              value = {this.state.searchKeyword}
              onChange = {this.handleValueChange}
            />
          </Search>
        </Toolbar>
      </AppBar>
          <Table>
            <TableHead>
              <TableRow className="green-nav">
                <TableCell>고유학번</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>호실</TableCell>
                <TableCell>택배 도착일</TableCell>
                <TableCell>수령여부</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                customers.map(c => {
                  return(
                    filteredComponents(this.state.customers);
                    //아마 이 아래 코드(Customer~)를 없애야할 것 같은데 없애도 검색할때 모든 요소가 다 나와서 그 부분 수정해야할듯
                    <Customer
                      key = {c.studentId}
                      studentId = {c.studentId}
                      name = {c.name}
                      room = {c.room}
                      date = {c.date}
                      getPost = {c.getPost}
                    />
                  );
                })
              }
            </TableBody>
          </Table>

      </div>
      
    
    );
  }
}

export default App;