import { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'

import NoteCard from '../components/NoteCard'

import New from './New'
import Show from './Note'

function Main() {
	const [notes, setNotes] = useState([])

	const URL = 'https://express-notes-data.herokuapp.com/notes/'

	const getNotes = async () => {
		const response = await fetch(URL)
		const data = await response.json() // console.log(response.json);
		setNotes(data)
	}

	const createNote = async (note) => {
		await fetch(URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'Application/JSON',
			},
			body: JSON.stringify(note),
		})
		// Update list of Note
		getNotes()
	}

	const updateNotes = async (note, id) => {
		// make put request to create Note
		await fetch(URL + id, {
			method: 'PUT',
			headers: {
				'Content-Type': 'Application/json',
			},
			body: JSON.stringify(note),
		})
		// update list of Note
		getNotes()
	}
	const deleteNote = async (id) => {
		// make delete request to create Note
		await fetch(URL + id, {
			method: 'DELETE',
		})
		// update list of Note
		getNotes()
	}

	useEffect(() => getNotes(), [])
	return (
		<main>
			<Switch>
				<Route path='/new'>
					<New notes={notes} createNote={createNote} />
				</Route>
				<Route exact path='/'>
					<NoteCard notes={notes} deleteNote={deleteNote} />
				</Route>
				<Route
					path='/:id'
					render={(rp) => (
						<Show
							notes={notes}
							getNotes={getNotes}
							updateNote={updateNotes}
							{...rp}
						/>
					)}
				/>
			</Switch>
		</main>
	)
}

export default Main
