import {NavLink} from "react-router-dom";
import React from "react";


function TopMenu({isAuthenticated}) {
    return (
        <nav>
            <div className="nav-container">
                <h4>BlogSpot</h4>
                <ul>
                    <li>
                        <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
                    </li>

                    {isAuthenticated === false &&
                    <li>
                        <NavLink to="/login" exact activeClassName="active-link">Login</NavLink>
                    </li>
                    }

                    {isAuthenticated === true &&
                    <>
                        <li>
                            <NavLink to="/login" exact activeClassName="active-link">LogOut</NavLink>
                        </li>

                        <li>
                        <NavLink to="/blogview" exact activeClassName="active-link">Blog overzicht</NavLink>
                        </li>

                        <li>
                        <NavLink to={`/blogpost/?${"id"}`} exact activeClassName="active-link">Blogpost</NavLink>
                        </li>
                    </>}
                </ul>
            </div>
        </nav>
    );
};

export default TopMenu;