import styled from 'styled-components';

export const FooterContainer = styled.div`
  width: 360px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  background-color: gray;
`;

const Footer = () => {
    return (
      <FooterContainer>
        <div className='footer_centering'>
            <img className='circle' src='http://placeimg.com/30/30'/>
            <label className='left_margin'>할 짓은 정했나요?</label>
        </div>
      </FooterContainer>
    );
  };

export default Footer;