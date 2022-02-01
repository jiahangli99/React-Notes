import { useState, useEffect } from 'react'
function Show(props) {
	const id = props.match.params.id
	const [noteDisplay, setNoteDisplay] = useState({
		title: ``,
		content: ``,
	})

	// FUNCTIONS

	const getByID = async () => {
		const URL = 'https://express-notes-data.herokuapp.com/notes/' + id
		const response = await fetch(URL)
		const data = await response.json()
		setNoteDisplay(data)
	}
	const handleChange = (event) => {
		setNoteDisplay({ ...noteDisplay, [event.target.name]: event.target.value })
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		props.updateNote(noteDisplay)
		props.history.push('/')
	}

	useEffect(() => getByID(), [])

	// JSX
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					value={noteDisplay?.title}
					name='title'
					onChange={handleChange}
				/>
				<input
					type='text'
					value={noteDisplay?.content}
					name='content'
					onChange={handleChange}
				/>
				<input type='submit' value='Save' />
			</form>
		</div>
	)
}
export default Show
