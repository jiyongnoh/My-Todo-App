import React from 'react';
import styled from 'styled-components';

const Body = styled.div`
  width: 360px;
  height: 640px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;

const Start = () => {
    const title = '오늘 할 일';
    return (
    <div className='container'>
        <Body>
            <p>To Do Application</p>
            <img className='start_img' src='55도발.jpg'/>
            <p>Loading...</p>
            <p>Made by Noh</p>
        </Body>  
    </div>
      
    );
  };

  export default Start;