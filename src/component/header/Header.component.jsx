import React from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { auth } from "../../firebase.util.js"
import { ReactComponent as Logo } from "../../asset/crown.svg";
import CartIcon from '../cart-icon/cart-icon.component.jsx';
import CartDropdown from '../cart-dropdown/cart-dropdown.component.jsx';
import "./header.style.scss";
// selector redux
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors.jsx';
import { selectCartHidden } from '../../redux/user/user.selectors.jsx';

const Header = ({currentUser,hidden}) => {
	return(
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
				currentUser ? 
				(
					<div className="option" onClick={ async () => await auth.signOut()}>
						LOGOUT
					</div>
				) : 
				(
					<Link className="option" to="/signin">
						SIGN-IN 
					</Link>
				)
			}
			<CartIcon />
		</div>
		{hidden ? null:
		<CartDropdown />
		}
	</div>
	)}

const mapStateToProps = createStructuredSelector({
	currentUser:selectCurrentUser,
	hidden:selectCartHidden
})

export default connect(mapStateToProps)(Header);	