import { Link } from 'react-router-dom'

function Sidebar() {
	return (
		<div className='Sidebar'>
			<Link to='/about' style={{ textDecoration: 'none', color: "#E1341E" }}>About</Link>
			<Link to='/'><img src='../Images/android-chrome-192x192.png' alt='' /></Link>
		</div>
	)
}

export default Sidebar
