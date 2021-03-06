import React from 'react'
import GoogleLogin from 'react-google-login'
import { useLocation,Redirect,useHistory } from 'react-router-dom'
// import FacebookLogin from 'react-facebook-login'
// import GitHubLogin from 'react-github-login';
// import { useLinkedIn } from 'react-linkedin-login-oauth2';
// import InstagramLogin from 'react-instagram-login';
// You can use provided image shipped by this package or using your own
// import linkedin from 'react-linkedin-login-oauth2';
import axios from 'axios'
import classes from './SocialMediaLogin.module.css'

// function OtherComponent() {

    
// }
export const SocialMediaLogin = ({isLoggedIn}) => {
    let location = useLocation();
    let history = useHistory();
    const responseGoogle = (response) =>
    {
        console.log(response);
        console.log(response.profileObj);

        const loginData = {
            "platform": "Google",
            "email": response.profileObj.email,
            "unique_id": response.profileObj.googleId
        }
        console.log(loginData);
        localStorage.setItem("platform","Google");
        localStorage.setItem("platform_email",response.profileObj.email);

        axios
        .post(`https://karyam-test-jp.herokuapp.com/platform`,loginData)
        .then(response => {
            console.log(response.data)
            if(response.data.message==="data already present")
            {
                
                // console.log(location.userProps);
                history.push('/')
                isLoggedIn();
            }
            else
            {
                history.push('/registrationpage');
                isLoggedIn();
                // localStorage.setItem("LoggedIn", true);
                
                // return <Redirect to="/registrationpage" />
            }
            // setRegistered(true)
            // if(response.data.responses ==="Data Recorded")
            // {
            //     setRegistered(true)
            // }
        })
        .catch(error => {
            console.log(error)
        })
    }
    // const responseFacebook = (response) =>
    // {
    //     console.log(response);
    //     const loginData = {
    //         "platform": "Facebook",
    //         "email": response.email,
    //         "unique_id": response.id
    //     }
    //     console.log(loginData);
    //     axios
    //     .post(`https://karyam-test-jp.herokuapp.com/platform`,loginData)
    //     .then(response => {
    //         console.log(response.data)
    //         // setRegistered(true)
    //         // if(response.data.responses ==="Data Recorded")
    //         // {
    //         //     setRegistered(true)
    //         // }
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     })
    // }
    // const componentClicked = (data) =>
    // {
    //     console.log(data);
    // }
    // const responseGithub = (response) =>
    // {
    //     console.log(response)
    // }
    // const onSuccess = response => console.log(response);
    // const onFailure = response => console.error(response);
    
    // const { linkedInLogin } = useLinkedIn({
    //     clientId: '86vhj2q7ukf83q',
    //     redirectUri: `${window.location.origin}/linkedin`, // for Next.js, you can use `${typeof window === 'object' && window.location.origin}/linkedin`
    //     onSuccess: (code) => {
    //       console.log(code);
    //     },
    //     onError: (error) => {
    //       console.log(error);
    //     },
    //   });
      
    
    return (
        <div>
            <GoogleLogin 
            clientId="108059489672-m06gsij5h4d92ll5f7pp59m81hokgm9j.apps.googleusercontent.com"
            // buttonText="Login with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            className={classes.login}
            >
                <span>Login with google</span>
            </GoogleLogin>

            {/* <FacebookLogin
            appId="584320072861407"
            // autoLoad={false}
            fields="name,email,picture"
            onClick={componentClicked}
            callback={responseFacebook} 
            textButton="Login"/> */}

            {/* <GitHubLogin clientId="d953de88c52fcc3cf8d5"
                redirectUri=""
                onSuccess={onSuccess}
                onFailure={onFailure}/>

            
            <img
                onClick={linkedInLogin}
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                alt="Sign in with Linked In"
                style={{ maxWidth: '180px', cursor: 'pointer' }}
                /> */}

            
        </div>
    )
}
