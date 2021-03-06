import React from 'react';
// component
import { Homepage } from "./page/homepage/Homepage.component";
import ShopPage from "./page/shop/Shop.component";
import SignInAndSignUp from "./page/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx"
import Header from "./component/header/Header.component"
import Checkout from './component/checkout/checkout.component.jsx'
// route
import { Route,Switch,Redirect  } from "react-router-dom";
// style
import './App.css';
// redux
import { connect } from 'react-redux';
import { checkUserSession } from './redux/user/user.action.jsx';
// selector
import { createStructuredSelector } from 'reselect' 
// import { selectCollectionPreview } from './redux/shop/shop.selector.jsx';
import { selectCurrentUser } from './redux/user/user.selectors.jsx';


class App extends React.Component{
	
	unSubcribeFromAuth = null;
	
	componentDidMount(){
		const  {checkUserSession} = this.props;
		checkUserSession();
	}

	componentWillUnmount(){
		this.unSubcribeFromAuth()
	}
	
	render(){
	  return (
	    <div className="App">
	    	<Header/>
	    	<Switch>
		    	<Route exact path="/" component={Homepage} />
		    	<Route exact path="/checkout" component={Checkout} />
		    	<Route  path="/shop" component={ShopPage} />
		    	<Route  path="/signin" render={() => this.props.user ? <Redirect to="/" /> : <SignInAndSignUp/>} />
	    	</Switch>
	    </div>
	  );
	}
}

const mapStateToProps = createStructuredSelector({
	user:selectCurrentUser,
})

const mapsDispatchToProps = dispatch => ({
	checkUserSession:() => dispatch(checkUserSession())
})


export default connect(mapStateToProps,mapsDispatchToProps)(App);
