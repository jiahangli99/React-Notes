import { Link } from 'react-router-dom'

function NewButton() {
	return (
		<div>
			<Link to='/notes/new'>+New</Link>
		</div>
	)
}

export default NewButton
