import { useState } from 'react'
function Show(props) {
	const id = props.match.params.id
	const notes = props.notes
	console.log(notes)
	let note = notes.find((p) => p._id === id)
	if (!note) {
		props.getNotes()
		note = notes.find((p) => p._id === id)
	}
	console.log(note)
	const [noteDisplay, setNoteDisplay] = useState({
		title: `${note.title}`,
		content: `${note.content}`,
	})

	const handleChange = (event) => {
		setNoteDisplay({ ...noteDisplay, [event.target.name]: event.target.value })
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		props.updateNote(noteDisplay, note._id)
		props.history.push('/')
	}
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					value={noteDisplay.title}
					name='title'
					onChange={handleChange}
				/>
				<input
					type='text'
					value={noteDisplay.content}
					name='content'
					onChange={handleChange}
				/>
				<input type='submit' value='Save' />
			</form>
		</div>
	)
}
export default Show
