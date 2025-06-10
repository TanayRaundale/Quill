import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NoteList from './components/NoteList'
import NoteForm from './components/NoteForm';
import Header from './components/Header';
const App = () => {

  const[notes,setnotes] = useState([]);
  return (
    <>
    <BrowserRouter>
              <Header></Header>
      <Routes>
        <Route path='/' element={<NoteList notes={notes} setnotes={setnotes}></NoteList>}/>
        <Route path='/create' element={<NoteForm notes={notes} setnotes={setnotes}></NoteForm>}></Route>
      </Routes>

    </BrowserRouter>

    </>
  )
}

export default App