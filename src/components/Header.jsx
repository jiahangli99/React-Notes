import { Link } from "react-router-dom";
import NewButton from './NewButton'

function Header() {
  return (
  <div className="Header">
      <h1>Reactive Chat</h1>
    <NewButton />  
  </div>
  )
}

export default Header;
