import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <div className="nav">
                <NavLink className="logo" to="/">Blog App</NavLink>
                <div className="links">
                    <NavLink className="link" to="/posts">See All</NavLink>
                    <NavLink className="link" to="/create">Create Post</NavLink>
                </div>
            </div>
        </nav>
    )

}

export default Nav;
