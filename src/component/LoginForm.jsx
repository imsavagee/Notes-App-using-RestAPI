import { useAuth0 } from '@auth0/auth0-react';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Post from './Post';

function LoginForm() {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const navigate = useNavigate()
    const { isAuthenticated, user, loginWithRedirect } = useAuth0();

    function onSubmit(e) {
        e.preventDefault()
        if (email === "ahmedshavez55@gmail.com" && pass == 123) {
            navigate("/home")
        } else {
            navigate("/")
        }

    }
    return (
        <>{
            // isAuthenticated ?
            //  <Post user={user} /> 
            //  :

            //     <div className='container  d-flex justify-content-center h-5 mt-5' >
            //         <div className='mt-5 p-5 rounded' style={{ width: "35rem", backgroundColor: "lavender" }}>
            //             <form onSubmit={onSubmit}>
            //                 <div className="mb-3">
            //                     <label htmlFor="Email" className="form-label">Email address</label>
            //                     <input type="email" className="form-control" id="Email" value={email} onChange={(e) => setEmail(e.target.value)} aria-describedby="emailHelp" />
            //                     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            //                 </div>
            //                 <div className="mb-3">
            //                     <label htmlFor="Password" className="form-label">Password</label>
            //                     <input type="password" className="form-control" id="Password" value={pass} onChange={(e) => setPass(e.target.value)} />
            //                 </div>
            //                 <div className='text-center'>
            //                     <button type="submit" className="btn btn-primary mb-2 px-5">Login</button> <br />
            //                     <button className="btn btn-primary px-5" onClick={() => loginWithRedirect()}>Log In with Other options</button>

            //                 </div>
            //             </form>
            //         </div>
            //     </div>
        }
        </>
    )
}

export default LoginForm