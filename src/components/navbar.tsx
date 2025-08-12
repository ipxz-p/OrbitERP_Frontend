import { Link } from "@tanstack/react-router"

const Navbar = () => {
  return (
    <div className="p-2 flex gap-2">
      <Link to="/" className="[&.active]:font-bold">
        Home
      </Link>{" "}
      <Link to="/about" className="[&.active]:font-bold">
        About
      </Link>
      <Link to="/posts" className="[&.active]:font-bold">
        posts
      </Link>
      <Link to="/login" className="[&.active]:font-bold">
        login
      </Link>
    </div>
  )
}

export default Navbar
