import { useState } from 'react'
import './nav.css'

function NavBar() {
    const [isOpen, setIsOpen] = useState(false)
    const togglemenu = () => {
       setIsOpen(!isOpen)
    }
    return (
    <>
    <nav>
      <h2>Todo List</h2>
      <ul className={`menu ${isOpen ? "open" : ""}`}>
      <li><a href="#">Home</a></li>
      <li><a href="https://www.instagram.com/codingseru1">Follow</a></li>
      </ul>
    <button className={`hamburger ${isOpen ? "open" : ""}`} onClick={togglemenu}>
      <span></span>
      <span></span>
      <span></span>
    </button>
    </nav>
    </>
    )
}

export default NavBar