import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase.util.js"
import { ReactComponent as Logo } from "../../asset/crown.svg";
import "./header.style.scss";

const Header = ({User}) => (
	<div className="header">
		<Link to="/" className="logo-container">
			<Logo />
		</Link>
		<div className="options">
			<Link className="option" to="/shop">
				SHOP
			</Link>
			<Link className="option" to="/shop">
				CONTACT
			</Link>
			{
				User ? 
				(
					<div className="option" onClick={() => auth.signOut()}>
						LOGOUT
					</div>
				) : 
				(
					<Link className="option" to="/signin">
						SIGN-IN
					</Link>
				)
			}
		</div>
	</div>
	)

export default Header;