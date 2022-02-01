function Delete(props) {
	const removeNote = () => {
		props.deleteNote(props.note._id)
	}
	return (
		<div>
			<button id='delete' onClick={removeNote}>
				DELETE
			</button>
		</div>
	)
}
export default Delete
