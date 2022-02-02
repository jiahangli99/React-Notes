import { Link } from "react-router-dom";

function Sidebar() {
  return (
  <div className="Sidebar">
      
      <Link to="/notes/about" style={{ textDecoration: 'none' }}>
          About
      </Link>
  </div>
  )
}

export default Sidebar;
