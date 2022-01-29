import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <div className="nav">
                <NavLink className="logo" to="/">Blog App</NavLink>
                <div className="links">
                    <ul>
                        <li>Dummy Links</li>
                    </ul>
                </div>
            </div>
        </nav>
    )

}

export default Nav;
