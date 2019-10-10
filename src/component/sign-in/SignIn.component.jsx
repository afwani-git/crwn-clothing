import React from "react";
import FormInput from "../form-input/FormInput.component.jsx";
import CostomButton from "../custom-button/CustomButton.component.jsx";
import { auth,signInWithGoogle } from "../../firebase.util.js";
import "./Signin.style.scss";

class SignIn extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			email:"",
			password:""
		}
		this.handleChage = this.handleChage.bind(this);
	}

	handleSubmit = async (evt) => {
		evt.preventDefault();
		const { email,password } = this.state;
		try{			
			await auth.signInWithEmailAndPassword(email,password);
		}catch(e){
			console.log(e.message);
		}
		this.setState({
			email:"",
			password:""
		})
	}

	handleChage(evt){
		const {name,value} = evt.target;
		this.setState({[name]:value});
	}
	render(){
		const {email,password} = this.state;
		return (
			<div className="sign-in">
				<h2>I alredy have an account</h2>
				<span>sign-in with email or password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput 
						name="email"
						type="email"
						label="email" 
						value={email}
						onChange={this.handleChage} 
						required
					/>
					<FormInput 
						name="password"
						type="password"
						label="password" 
						value={password}
						onChange={this.handleChage} 
						required
					/>
					<div className="button">
						<CostomButton type="submit">
							SIGN IN
						</CostomButton>
						<CostomButton type="submit" onClick={signInWithGoogle} isGoogleSignIn>
							SIGN IN WITH GOOGLE
						</CostomButton>
					</div>
				</form>
			</div>
			)
	}
}

export default SignIn;
