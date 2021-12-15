import React,{useRef} from 'react'
import { useHistory,useLocation } from 'react-router'
import { SocialMediaLogin } from './SocialMediaLogin'



export default function Login({isLoggedIn}) {

    
    const uname=useRef()
    const password = useRef()
    const history = useHistory()
    let location = useLocation();
    const check = () => {
        console.log(location.userProps);
    }
    
    
    const handleSubmitLoginForm = () => {
        const username=uname.current.value
        const pass=password.current.value
        console.log(`Logged in - ${username} ${pass}`)
        if(username==="karyam" && pass==="employer@123")
        {
            isLoggedIn()    
            history.push("/")
        }
        else{
            alert("Incorrect Credentials")
        }
        
    }
    return (
        <>
            <div className="container">
                <h3>Login Page</h3>
                {/* {check()} */}
                <form>
                    <div className="mb-3">
                        <label className="form-label">Username : </label>
                        <input ref={uname} className="form-control" type="text"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password : </label>
                        <input ref={password} type="password" className="form-control"/>
                    </div>
                    <button type="button" onClick={handleSubmitLoginForm} className="btn btn-primary">Submit</button>
                </form>
            </div>

            <div className="container mt-3">
                <SocialMediaLogin isLoggedIn={isLoggedIn} />
            </div>
        </>
    )
}
