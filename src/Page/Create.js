import React from 'react';
import styled from 'styled-components';
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import { useState } from 'react';
import {Link } from 'react-router-dom';

const Body = styled.div`
  width: 360px;
  height: 527px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  padding-top: 50px;
`;
const Container = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-evenly;
`;
const Label =styled.label`
  margin-bottom: 5px;
`
const Input = styled.input`
  width: 250px;
`
const Textarea = styled.textarea`
  width: 250px;
  height: 200px;
`

const Create = () => {
    const headerTitle = 'Create';
    const [title, titleChange] = useState('');
    const [body, bodyChange] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      if(title === '' || body === '') {
        alert('fail')
        return;
      }
      fetch('http://localhost:3001/todoList', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          "title" : title,
          "body" : body,
          })
        }
      )
      .then(()=>window.location.replace('/'))
    }
    
    return (
    <div className='container'>
        <Header title={headerTitle}/>
        <Body>
          <Container>
            <Label>Title</Label>
            <Input type='text' value={title} onChange={(e) => {titleChange(e.target.value)}}/>
          </Container>
          <Container>
            <Label>Content</Label>
            <Textarea value={body} onChange={(e)=>bodyChange(e.target.value)} />
          </Container>
          <ButtonContainer>
            <button onClick={handleSubmit}>Create</button>
            <Link to = '/'><button>Cancle</button></Link>
          </ButtonContainer>
        </Body>
        <Footer />
    </div>
      
    );
  };

  export default Create;