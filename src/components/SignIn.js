import React from "react";
// import GoogleLogin from "react-google-login";
// import FacebookLogin from "react-facebook-login";
import "./SignIn.css";

function SignIn(props) {
  const responseGoogle = (response) => {
    // Handle Google sign-in
  };

  const responseFacebook = (response) => {
    // Handle Facebook sign-in
  };

  return (
    <div className="SignIn">
      <h2>Sign In</h2>
      <div className="SignInCard">
        {/*<GoogleLogin*/}
        {/*  clientId="your-google-client-id"*/}
        {/*  buttonText="Sign in with Google"*/}
        {/*  onSuccess={responseGoogle}*/}
        {/*  onFailure={responseGoogle}*/}
        {/*  cookiePolicy={"single_host_origin"}*/}
        {/*/>*/}
        {/*<FacebookLogin*/}
        {/*  appId="your-facebook-app-id"*/}
        {/*  fields="name,email,picture"*/}
        {/*  callback={responseFacebook}*/}
        {/*  icon="fa-facebook"*/}
        {/*/>*/}
      </div>
    </div>
  );
}

export default SignIn;
