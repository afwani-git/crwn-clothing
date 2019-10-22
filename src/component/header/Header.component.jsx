import React from "react";
import { connect } from 'react-redux';
import { auth } from "../../firebase.util.js"
import { ReactComponent as Logo } from "../../asset/crown.svg";
import CartIcon from '../cart-icon/cart-icon.component.jsx';
import CartDropdown from '../cart-dropdown/cart-dropdown.component.jsx';
// import "./header.style.scss";
import { HeaderContainer,LogoContainer,OptionsContainer,OptionLink } from './header.style.jsx';
// selector redux
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors.jsx';
import { selectCartHidden } from '../../redux/user/user.selectors.jsx';

const Header = ({currentUser,hidden}) => {
	return(
	<HeaderContainer>
		<LogoContainer to='/'>
			<Logo />
		</LogoContainer>
		<OptionsContainer>
			<OptionLink to="/shop">
				SHOP
			</OptionLink>
			<OptionLink to="/shop">
				CONTACT
			</OptionLink>
			{
				currentUser ? 
				(
					<OptionLink as='div' onClick={ async () => await auth.signOut()}>
						LOGOUT
					</OptionLink>
				) : 
				(
					<OptionLink to="/signin">
						SIGN-IN 
					</OptionLink>
				)
			}
			<CartIcon />
		</OptionsContainer>
		{hidden ? null:
		<CartDropdown />
		}
	</HeaderContainer>
	)}

const mapStateToProps = createStructuredSelector({
	currentUser:selectCurrentUser,
	hidden:selectCartHidden
})

export default connect(mapStateToProps)(Header);	