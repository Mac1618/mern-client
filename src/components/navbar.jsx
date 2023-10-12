import { Link } from "react-router-dom"
import './navbar.css';  

export const Navbar = () => {
  return (
    <div className="navbar">
      <Link to={"/"}>Home</Link>
      <Link to={"/create-recipe"}>Create Recipe</Link>
      <Link to={"/saved-recipe"}>Saved Recipe</Link>
      <Link to={"/auth"}>Login/Register</Link>
    </div>
  )
}