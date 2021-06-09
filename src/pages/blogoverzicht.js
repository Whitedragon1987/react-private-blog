import posts from "../data/posts.json";
import {NavLink} from "react-router-dom";
import React from "react";


function Blogoverzicht({isAuthenticated}) {
    return (
        <div>
          <div>
              {posts.map((post) => (
                    <div key={post.id}>
                        <ul>
                            <li>
                            <NavLink to={`/blogpost/${post.id}`} exact
                                     activeClassName="active-link">{post.title}</NavLink>
                            </li>
                        </ul>
                    </div>
                )) }
            </div>
        </div>
    )
};

export default Blogoverzicht;