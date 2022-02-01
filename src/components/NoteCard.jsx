import { useState } from 'react'
import { Link } from 'react-router-dom'

function NoteCard(props) {
	return (
		<>
			{props.notes.map((note, i) => (
				<div key={i}>
					<Link to={`/${note._id}`}>
						<h3>{note.title}</h3>
					</Link>
				</div>
			))}
		</>
	)
}
export default NoteCard
