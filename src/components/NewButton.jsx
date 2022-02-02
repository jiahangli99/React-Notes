import { Link } from 'react-router-dom'

function NewButton() {
	return (
		<div className='Button'>
			<Link to='/notes/new' style={{ textDecoration: 'none' }}>
				<button>+New</button>
			</Link>
		</div>
	)
}

export default NewButton
