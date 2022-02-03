import { useState } from 'react'
import './New.css'

function New(props) {
	const [note, setNote] = useState({
		title: '',
		content: '',
	})

	const handleChange = (event) => {
		setNote({ ...note, [event.target.name]: event.target.value })
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		props.createNote(note)
		setNote({
			title: '',
			content: '',
		})
	}
	return (
		<section>
			<form onSubmit={handleSubmit}>
				<input
				className='title'
					type='text'
					value={note.title}
					name='title'
					placeholder='Title'
					onChange={handleChange}
				/>
				<textarea
					className='content'
					type='text'
					value={note.content}
					name='content'
					placeholder='Note'
					onChange={handleChange}
				/>

				<input className='button' type='submit' value='Create Note' />
			</form>
		</section>
	)
}

export default New
