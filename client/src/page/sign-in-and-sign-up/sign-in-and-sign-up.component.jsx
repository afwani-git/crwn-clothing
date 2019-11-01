import React from "react";
import SignIn from "../../component/sign-in/SignIn.component"
import SingnUp from "../../component/sign-up/SignUp.component";
import "./sign-in-and-sign-up.style.scss";

const SignInAndSignUp = () => (
		<div className="sign-in-and-sign-up">
			<SignIn />
			<SingnUp />
		</div>
	) 

export default SignInAndSignUp;