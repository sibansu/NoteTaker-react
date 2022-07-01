import React, { useState, useEffect } from 'react'
import NotesList from './Components/NotesList';
import { nanoid } from 'nanoid';
import Search from './Components/Search';
import Navbar from './Components/Navbar';

function App() {

  const [notes, setNotes] = useState([{
    id: nanoid(),
    text: "This is a note template",
    date: "13/12/2022"
  },
  ])

  useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('note-making-react-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'note-making-react-data',
			JSON.stringify(notes)
		);
	}, [notes]);

  const addANote = (userText) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: userText,
      date: date.toLocaleDateString(),
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  const [searchText, setSearchText] = useState("");


  return (
    <div className="container">
      <Navbar />
      <Search handleSearch={setSearchText} />

      <NotesList handleanote={addANote} handleDeleteNotes={deleteNote} notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} />
    </div>
  )
}

export default App;
