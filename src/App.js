import React from 'react';
import {Route, withRouter} from 'react-router-dom';
import './App.css';
import Preloader from "./components/common/Preloader/Preloader";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import FriendsContainer from "./components/Friends/FriendsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Footer from "./components/Footer/Footer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Login from './components/Login/Login.jsx';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {initializeApp} from './redux/AppReducer';

class App extends React.Component {

	componentDidMount() {
		this.props.initializeApp();
	}

	render() {
		if (!this.props.initialized)
			return (
				<Preloader />
				);

		return (
			<div className={"app-wrapper"}>
				<HeaderContainer/>
				<Navbar/>
				<div className={"app-wrapper-content"}>
					<Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
					<Route path={'/friends'} render={() => <FriendsContainer/>}/>
					<Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
					<Route path={'/users'} render={() => <UsersContainer/>}/>
					<Route path={'/news'} component={News}/>
					<Route path={'/music'} component={Music}/>
					<Route path={'/settings'} component={Settings}/>
					<Route path={'/login'} component={Login}/>
				</div>
				<Footer/>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized
});


export default compose(
	withRouter,
	connect(mapStateToProps, {initializeApp}))(App);
