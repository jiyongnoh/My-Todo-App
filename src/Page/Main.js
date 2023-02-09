import React from 'react';
import styled from 'styled-components';
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import TodoList from '../Component/TodoList';
import {Link } from 'react-router-dom';

const Body = styled.div`
  width: 360px;
  height: 527px;
  overflow: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
`;
const Button = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;

  position: absolute;
  right: 10px;
  bottom: 40px;

  font-weight: bold;
  cursor: pointer;
`
const Main = ({todoList}) => {
    const title = '오늘 할 일';

    return (
    <div className='container'>
        <Header title={title}/>
        <Body>
          {todoList.map((list, index) => {return <TodoList key={index} todoList={list}></TodoList>})}
          <Link to = '/create'><Button>게시글 <br/>작성</Button></Link>
        </Body>
        <Footer />
    </div>
      
    );
  };

  export default Main;