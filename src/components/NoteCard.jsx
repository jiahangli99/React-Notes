import { Link } from 'react-router-dom'

import Delete from './DeleteButton'

function NoteCard(props) {
	return (
		<>
			{props.notes.map((note, i) => (
				<div key={i}>
					<Link to={`/${note._id}`}>
						<h3>{note.title}</h3>
					</Link>
					<Delete deleteNote={props.deleteNote} note={note} />
				</div>
			))}
		</>
	)
}
export default NoteCard
