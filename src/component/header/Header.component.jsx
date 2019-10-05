import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../asset/crown.svg";
import "./header.style.scss";

const Header = () => (
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
		</div>
	</div>
	)

export default Header;