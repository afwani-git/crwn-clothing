import React from "react";
import { connect } from 'react-redux';
import { signOutStart } from '../../redux/user/user.action.jsx';

import { ReactComponent as Logo } from "../../asset/crown.svg";
import CartIcon from '../cart-icon/cart-icon.component.jsx';
import CartDropdown from '../cart-dropdown/cart-dropdown.component.jsx';
// import "./header.style.scss";
import { HeaderContainer,LogoContainer,OptionsContainer,OptionLink } from './header.style.jsx';
// selector redux
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors.jsx';
import { selectCartHidden } from '../../redux/user/user.selectors.jsx';

const Header = ({currentUser,hidden,signOutStart}) => {
	return(
	<HeaderContainer>
		<LogoContainer to='/'>
			<Logo />
		</LogoContainer>
		<OptionsContainer>
			<OptionLink to="/shop">
				SHOP
			</OptionLink>
			<OptionLink to="/">
				CONTACT
			</OptionLink>
			{
				currentUser ? 
				(
					<OptionLink  to='' as='div' onClick={signOutStart}>
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
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps,mapDispatchToProps)(Header);	