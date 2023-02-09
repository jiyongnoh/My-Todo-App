import React from 'react';
import {Link } from 'react-router-dom';
import styled from 'styled-components';

const Ulcontainer = styled.ul`
  width: 150px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: left;
  
`;

export const Li = styled.li`
  margin: 15px 0;
  cursor: pointer;
  a {
    text-decoration: none;
    color: black;
  }
  `;

const Menu = ({rainbowHandler}) => {
  return (
    <Ulcontainer>
        <Li ><img className='right_margin' src='http://placeimg.com/15/15'/><Link to = '/'>Home</Link></Li>
        <Li ><img className='right_margin' src='http://placeimg.com/15/15'/><Link to = '/yesterday'>Yesterday</Link></Li>
        <Li ><img className='right_margin' src='http://placeimg.com/15/15'/><Link to = '/calender'>Calender</Link></Li>
        <Li onClick={rainbowHandler}><img className='right_margin' src='http://placeimg.com/15/15'/><a>Rainbow</a></Li>
        <Li ><img className='right_margin' src='http://placeimg.com/15/15'/><Link to = '/made'>Made By</Link></Li>
    </Ulcontainer>
  );
};

export default Menu;
