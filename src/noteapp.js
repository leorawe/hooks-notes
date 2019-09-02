import React, {useState} from 'react';
//import ReactDOM from 'react-dom';

const NoteApp = () => {
  const [notes, setNotes] = useState([])
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

    return (
        <div>
            <h1>Notes</h1>
            {notes.map((note)=> (
                <div>
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