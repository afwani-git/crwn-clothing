import React from "react";

import FormInput from "../form-input/FormInput.component.jsx";
import CostomButton from "../custom-button/CustomButton.component.jsx";

// import { auth,signInWithGoogle } from "../../firebase.util.js";
// redux
import { connect } from 'react-redux';
import { signWithGoogleStart,signWithEmailStart } from '../../redux/user/user.action.jsx';

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
		const { signWithEmailStart } = this.props;
		const { email,password } = this.state;

		signWithEmailStart(email,password);


		// try{			
		// 	await auth.signInWithEmailAndPassword(email,password);
		// }catch(e){
		// 	console.log(e.message);
		// }
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
		const { signWithGoogleStart } = this.props;
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
						<CostomButton type="button" onClick={signWithGoogleStart} isGoogleSignIn>
							SIGN IN WITH GOOGLE
						</CostomButton>
					</div>
				</form>
			</div>
			)
	}
}

const mapsDispatchToProps = dispatch => ({
	signWithGoogleStart:() => dispatch(signWithGoogleStart()),
	signWithEmailStart:(email,password) => dispatch(signWithEmailStart({email,password}))
})

export default connect(null,mapsDispatchToProps)(SignIn);
