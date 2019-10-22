import React from 'react';
// component
import { Homepage } from "./page/homepage/Homepage.component";
import ShopPage from "./page/shop/Shop.component";
import SignInAndSignUp from "./page/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx"
import Header from "./component/header/Header.component"
import Checkout from './component/checkout/checkout.component.jsx'
// route
import { Route,Switch,Redirect  } from "react-router-dom";
// backend
import { auth,createUserProfileDocument } from "./firebase.util"; 
// style
import './App.css';
// redux
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action.jsx';
// selector
import { createStructuredSelector } from 'reselect' 
// import { selectCollectionPreview } from './redux/shop/shop.selector.jsx';
import { selectCurrentUser } from './redux/user/user.selectors.jsx';


class App extends React.Component{
	
	unSubcribeFromAuth = null;
	
	componentDidMount(){
		this.unSubcribeFromAuth = auth.onAuthStateChanged( async (userAuth) => {
			if(userAuth){
				const userRef = await createUserProfileDocument(userAuth);
				userRef.onSnapshot(snapShot => {
					this.props.setCurrentUser({
						id:snapShot.id,
						...snapShot.data()
					})	
				})
			}else{
				this.props.setCurrentUser(userAuth);
			}
		// addCollectionAndItems('collection',
		// this.props.collectionItems.map(({title,items}) => ({title,items})))
		});
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
	// collectionItems:selectCollectionPreview
})

const mapsDispatchToProps = dispatch => ({
	setCurrentUser:user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapsDispatchToProps)(App);
