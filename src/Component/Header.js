import styled from 'styled-components';
import Menu from '../Component/Menu'
import { useEffect, useState } from 'react';


const Container = styled.div`
  width: 360px;
  height: 58px;
  padding: 0px 15px;
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: gray;
  border: 1px solid black;
  border-bottom: 0px;
`;

const OptionBackdrop = styled.div`
  background-color: rgba(0,0,0,0.3);
  position: relative;
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;

`;

const OptionBtn = styled.button`
  background-color: black;
  text-decoration: none;
  border: none;
  border-radius: 10px;
  padding: 10px;
  background-color: white;
  cursor: pointer;
`;

const OptionView = styled.div.attrs((props) => ({
  role: 'dialog',
}))`
  position: absolute;
  top: -30px;
  right: -15px;
  width: 150px;
  height: 640px;
  background-color: blanchedalmond;
  border: 1px solid black;
  
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Header = ({title}) => {

  const [isOpen, setIsOpen] = useState(false);
  const [rainbow, setRainbow] = useState(false);

  useEffect(()=>{
    if(rainbow){
    setTimeout(()=>{
      setRainbow(!rainbow)
    }, 1500)
  }
  },[rainbow])

  const rainbowHandler = () => {
    setRainbow(!rainbow)
  };

  const openOptionHandler = () => {
        setIsOpen(!isOpen)
  };

  const openContainerHandler = () => {
        if(isOpen) setIsOpen(false);
  };

  return (
      <Container>
        <div className='header_centering'>
            <img className='circle' src='http://placeimg.com/30/30'/>
            <label className='left_margin'>{title}</label>
        </div>
        <OptionBtn onClick={openOptionHandler}>Menu</OptionBtn>
        {
        isOpen ? 
          <OptionBackdrop onClick={openContainerHandler}>
            <OptionView onClick={event=>event.stopPropagation()}>
                <div>
                    <button onClick={openOptionHandler}>{'>'}</button>
                    <Menu rainbowHandler={rainbowHandler}/>
                </div>
            </OptionView>
          </OptionBackdrop>
          : ''
        }
        {rainbow ? <img className='rainbow' src="rainbow.png"/>  
          : ''}       
      </Container>
    );
  };

  export default Header;