import React from 'react';
import styled from 'styled-components';

import Header from '../Component/Header'
import Footer from '../Component/Footer'

const Body = styled.div`
  width: 360px;
  height: 527px;
  display: flex;
  background-color: orange;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;

const Made = () => {
    const title = '만든 사람';
    return (
    <div className='container'>
        <Header title={title}/>
        <Body>
            <img className='circle' src='http://placeimg.com/150/150'/>
            <p>
                SEB_FE_42_노지용
            </p>
        </Body>
        <Footer />
    </div>
      
    );
  };

  export default Made;