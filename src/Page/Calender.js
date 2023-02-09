import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Header from '../Component/Header'
import Footer from '../Component/Footer'

// library
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Body = styled.div`
  width: 360px;
  height: 527px;
  display: flex;
  justify-content: center;
  border: 1px solid black;
`;

const Calender = () => {
    const title = '달력';
    const [value, onChange] = useState(new Date());
    return (
    <div className='container'>
        <Header title={title}/>
        <Body>
          <Calendar onChange={onChange} value={value} />
        </Body>
        <Footer />
    </div>
      
    );
  };

  export default Calender;