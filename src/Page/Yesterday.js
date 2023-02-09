import React from 'react';
import styled from 'styled-components';
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import YesterdayList from '../Component/YesterdayList';

const Body = styled.div`
  width: 360px;
  height: 527px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
`;

const Yesterday = ({yesterDay}) => {
    const title = '어제 한 일';
    return (
    <div className='container'>
        <Header title={title}/>
        <Body>
          {yesterDay.map((list, index) => {return <YesterdayList key={index} yesterDay={list}></YesterdayList>})}
        </Body>
        <Footer />
    </div>
      
    );
  };

  export default Yesterday;