import { Link } from "react-router-dom";
import NewButton from './NewButton'

function Header() {
  return (
  <div className="Header">
      <Link to="/" style={{ textDecoration: 'none' }}>
      <h1>Reactive Chat</h1>

      </Link>
    <NewButton />  
  </div>
  )
}

export default Header;
