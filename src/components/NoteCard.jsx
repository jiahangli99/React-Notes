import { Link } from 'react-router-dom'

import Delete from './DeleteButton'

function NoteCard(props) {
	return (
		<div className='NoteArea'>
			{props.notes.map((note, i) => (
				<div key={i} className='NoteCard'>
					<Delete deleteNote={props.deleteNote} note={note} />
					<Link to={`/${note._id}`} style={{ textDecoration: 'none' }}>
						<h3>{note.title}</h3>
					</Link>
				</div>
			))}
		</div>
	)
}
export default NoteCard
