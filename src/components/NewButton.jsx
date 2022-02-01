import { Link } from "react-router-dom";

function NewButton() {
  return  (
    <div>
        <Link to="/notes/new">
            <button>+New</button>
        </Link>

    </div>
  )
}

export default NewButton;
