import React,{useReducer,useState,useEffect} from 'react'
import NoteList from './NoteList'
import AddNoteForm from './AddNoteForm'
import notesReducer from '../reducers/notes'
import NotesContext from '../context/notes-context'

const NoteApp = (props) => {
    const [notes,dispatch] = useReducer(notesReducer, [])
    useEffect(() => {
        console.log("Here will run once!")
        const notes = JSON.parse(localStorage.getItem("notes"))
        if (notes) {
            dispatch({type : "POPULATE_NOTES", notes })
        }
    }, [])

    useEffect(() => {
        console.log("Here will run when notes changes")

        localStorage.setItem("notes", JSON.stringify(notes))
    }, [notes])
    return (
        <NotesContext.Provider value={ { notes,dispatch } }>
            <h1>Notes</h1>
           <NoteList />
           
            <AddNoteForm />
        </NotesContext.Provider>
    )
}

export { NoteApp as default }