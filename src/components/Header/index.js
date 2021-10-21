import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-bar">
    <div>
      <img
        className="logo"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
      />
    </div>

    <ul className="menu">
      <Link className="menu-items" to="/">
        <li>Home</li>
      </Link>

      <Link className="menu-items" to="/Products">
        <li>Products</li>
      </Link>

      <Link className="menu-items" to="/Cart">
        <li>Cart</li>
      </Link>

      <button className="button" type="button">
        Logout
      </button>
    </ul>
  </nav>
)

export default Header
