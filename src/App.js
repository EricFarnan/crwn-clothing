import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import LoginAndRegisterPage from './pages/login-and-register/login-and-register.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {

  // firebase auth management
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      // if the user signs in the userAuth object will have data
      if (userAuth) {
        // get the userReference from attempting to add the user to the db
        const userRef = await createUserProfileDocument(userAuth);

        // get a snapshot of the userRef and set the currentUser to the data from the snapshot
        userRef.onSnapshot(snapShot => {
          setCurrentUser ({
            id: snapShot.id,
            ...snapShot.data()        
          });
        });      
      } 
      // if the user is signing out the userAuth object will be null
      else {
        // set the current user to null
        setCurrentUser(userAuth);
      }  
    });
  }

  // when the app component is unloaded it will close the user subscription
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/login' render={(() => this.props.currentUser ? (<Redirect to='/'/>) : (<LoginAndRegisterPage/>))}/>
          <Route path='/shop' component={ShopPage}/>
        </Switch>
      </div>
    )
  }
};

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
