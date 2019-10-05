import React from 'react';
import {Homepage} from "./page/homepage/Homepage.component";
import ShopPage from "./page/shop/Shop.component";
import { Route,Switch } from "react-router-dom"
import './App.css';

const Hats = (props) =>{
	console.log(props);
	return(
		<React.Fragment>
			<h1>Fragment for {props.match.params.id}</h1>	
		</React.Fragment>
		)
	}


function App() {
  return (
    <div className="App">
    	<Switch>
	    	<Route exact path="/" component={Homepage} />
	    	<Route  path="/shop/:id" component={Hats} />
	    	<Route  path="/shop" component={ShopPage} />
    	</Switch>
    </div>
  );
}


export default App;
