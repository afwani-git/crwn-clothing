import React from 'react';
import {Homepage} from "./page/homepage/Homepage.component";
import ShopPage from "./page/shop/Shop.component";
import SignInAndSignUp from "./page/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx"
import Header from "./component/header/Header.component"
import { Route,Switch } from "react-router-dom";
import { auth } from "./firebase.util.js"; 
import './App.css';

const Hats = (props) =>{
	console.log(props);
	return(
		<React.Fragment>
			<h1>Fragment for {props.match.params.id}</h1>	
		</React.Fragment>
		)
	}


class App extends React.Component{

	unSubcribeFromAuth = null;
	constructor(props){
		super(props);
		this.state = {
			currentUser:null
		}
	}

	
	componentDidMount(){
		this.unSubcribeFromAuth = auth.onAuthStateChanged(user => {
			this.setState({currentUser:user})
		})
	}

	componentWillUnmount(){
		this.unSubcribeFromAuth()
	}
	render(){
	  return (
	    <div className="App">
	    	<Header User={this.state.currentUser}/>
	    	<Switch>
		    	<Route exact path="/" component={Homepage} />
		    	<Route  path="/shop/:id" component={Hats} />
		    	<Route  path="/shop" component={ShopPage} />
		    	<Route  path="/signin" component={SignInAndSignUp} />
	    	</Switch>
	    </div>
	  );
	}
}


export default App;
