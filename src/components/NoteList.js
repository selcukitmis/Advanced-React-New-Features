import React,{ useContext } from 'react'
import Note from './Note'
import NotesContect from '../context/notes-context'

const NoteList = () => {
    const { notes } = useContext(NotesContect)
    return (
        <ul>
        {notes.map((note) => (
            <Note key={note.title} note={note} />
        ))}
    </ul>)
}

export { NoteList as default }