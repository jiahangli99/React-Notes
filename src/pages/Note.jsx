function Show(props) {
	const id = props.match.params.id
	const notes = props.notes
	const note = notes.find((p) => p._id === id)
	return (
		<div>
			<h1>{note.title}</h1>
			<h3>{note.content}</h3>
		</div>
	)
}
export default Show
