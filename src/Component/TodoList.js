import styled from 'styled-components';
import { useState } from 'react';

export const Container = styled.div`
  width: 360px;
  height: 58px;
  padding: 0px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border: 1px solid black;
  margin: 1px;
`;

const UpdateContainer = styled.div`
    width: 360px;
    height: 58px;
    padding: 0px 15px;
    background-color: gray;
    border: 1px solid black;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1px;
`

const Input = styled.input`
  width: 150px;
`

const Input2 = styled.input`
  width: 30px;
`
const Label =styled.label`
  margin-left: 5px;
`

const TodoList = ({todoList}) => {
    const [update, setUpdate] = useState(false);
    const [title, titleChange] = useState('');

    // delete handler
    const handleDeleteClick = () => {
          fetch(`http://localhost:3001/todoList/${todoList.id}`, {
          method: "DELETE",
         })
         .then(() => window.location.replace('/'))
    }

    // update handler
    const handleUpdateClick = () => {
        if(title === ''){
            alert('fail')
            return;
        }
        fetch(`http://localhost:3001/todoList/${todoList.id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          ...todoList,
          title,
        })
       })
       .then(() => window.location.replace('/'))
  }

    return(<div>
        {update ? 
        <UpdateContainer>
            <div>
                <Label>Title: </Label>
                <Input type="text" value={title} onChange={(e)=>titleChange(e.target.value)}/>
            </div>
            <div>
                <button onClick={handleUpdateClick}>Update</button>
                <button onClick={()=>setUpdate(!update)}>Cancle</button>
            </div>
        </ UpdateContainer>
        :
        <Container>
            <div>
                <input type="checkbox"/>
                <Label>{todoList.title}</Label>
            </div>
            <div>
                <button onClick={()=>setUpdate(!update)}>Update</button>
                <button onClick={handleDeleteClick}>Delete</button>
            </div>
        </Container>}
    </div>
    )
}

export default TodoList;