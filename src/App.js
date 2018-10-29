import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './component/Header'
import Home from "./component/Home";
import Package from "./component/Package";
import Area from "./component/Area";
import Support from "./component/Support";
import IphoneXS from "./component/home/IphoneXS";
import Footer from "./component/Footer";
import Client from "./component/support/Client";
import Guide from "./component/support/Guide";
import Policy from "./component/support/Policy";
import IPhoneXr from "./component/home/iPhoneXR";
import ScrollToTop from "./component/ScrollToTop";

class App extends Component {

	render() {
		return (

			<Router>
				<ScrollToTop>
					<Header/>

					<Route exact={true} path={'/'} component={Home}/>
					<Route path={'/package'} component={Package} />
					<Route path={'/area'} component={Area} />
					<Route path={'/support'} component={Support} />
					<Route path={'/iphonexs'} component={IphoneXS}/>
					<Route path={'/iphonexr'} component={IPhoneXr}/>

					<Route path={'/client'} component={Client}/>
					<Route path={'/guide'} component={Guide}/>
					<Route path={'/policy'} component={Policy}/>

					<Footer/>
				</ScrollToTop>
			</Router>
		)
	}
}

export default App;
