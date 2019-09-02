import React, {useState, useEffect} from 'react';
//import ReactDOM from 'react-dom';

const NoteApp = () => {
  const notesData = JSON.parse(localStorage.getItem('notes'))
  const [notes, setNotes] = useState(notesData || [])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addNote = (e) => {
    e.preventDefault()
    setNotes([
        ...notes, 
        {title, body}
    ])
    setTitle('')
    setBody('')
  }

  const removeNote = (title) => {
      setNotes(notes.filter(note=> note.title !== title))
  }

  useEffect(()=> {
        localStorage.setItem('notes', JSON.stringify(notes))
  })

    return (
        <div>
            <h1>Notes</h1>
            {notes.map((note)=> (
                <div key={note.title}>
                    <h2> {note.title}</h2>
                    <p>{note.body}</p>
                    <button onClick= {()=>removeNote(note.title)}>x</button>
               </div>
            ))}
            <hr />
            <p>Add Note</p>
            <form onSubmit={addNote}>
                <input value={title} onChange = {(e)=> setTitle(e.target.value)}/>
                <textarea value={body} onChange = {(e)=> setBody(e.target.value)}/>
                <button>Add Note</button>
            </form>
        </div>
    )
}

export default NoteApp