import React, { useEffect } from 'react'
import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"; 

import useFetch from './Util/useFetch';
import Main from './Page/Main';
import Yesterday from './Page/Yesterday';
import Calender from './Page/Calender';
import Made from './Page/Made';
import Start from './Page/Start';
import Create from './Page/Create';


function App() {
  const [start, setStart] = useState(true);
  const [todoList, isPending, error] = useFetch('http://localhost:3001/todoList');
  const [yesterDay, isPending2, error2] = useFetch('http://localhost:3001/yesterDay');

  useEffect(()=>{
    if(start){
    setTimeout(()=>{
      setStart(!start)
    }, 1100)
  }
  },[])

  return (
    <div className='container'>
      { start ? <Start />: <BrowserRouter>
        <section>
          <Routes>
            <Route path = '/' element = {<Main todoList={todoList} />}/>
            <Route path = '/create' element = {<Create />}/>
            <Route path = '/yesterday' element = {<Yesterday yesterDay={yesterDay}/>}/>
            <Route path = '/calender' element = {<Calender />}/>
            <Route path = '/made' element = {<Made />}/>
          </Routes>
        </section>
      </BrowserRouter>
      } 
      
    </div>
  );
}

export default App;
