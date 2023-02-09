import styled from 'styled-components';

export const Container = styled.div`
  width: 360px;
  height: 58px;
  padding: 0px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #808080;
  border: 1px solid black;
  margin: 1px;
`;

export const Label = styled.label`
  text-decoration: line-through;
`;

const YesterdayList = ({yesterDay}) => {

    const handleDeleteClick = () => {
        fetch(`http://localhost:3001/yesterDay/${yesterDay.id}`, {
        method: "DELETE",
       })
       .then(() => window.location.replace('/yesterday'))
    }

    return(
        <Container>
            <div>
                <Label>{yesterDay.title}</Label>
            </div>
            <div>
                <button onClick={handleDeleteClick}>Delete</button>
            </div>
        </Container>
    )
}

export default YesterdayList;