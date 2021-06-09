import React from "react";
import {useHistory} from "react-router-dom";

function Login({isAuthenticated, toggleIsAuthenticated}) {
    const history = useHistory()
function signIn() {
    toggleIsAuthenticated(true)
   history.push("/blogview")
}
function signOut() {
    toggleIsAuthenticated(false)
    history.push("/")
}
    console.log(isAuthenticated)
    return (
        <div>
            {isAuthenticated === true &&
                <button type="button" onClick={signOut}>
                Log Out!
                </button>
            }
            {isAuthenticated === false &&
            <button type="button" onClick={signIn}>
                Log In!
            </button>
            }
        </div>
    )
};

export default Login;