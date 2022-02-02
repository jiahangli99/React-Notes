import { Link } from 'react-router-dom'

function NewButton() {

	return (
        <Link to='/notes/new'>
		<div className='Button'>
			+New
		</div>
        </Link>
	)

}

export default NewButton
