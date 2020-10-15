import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import LoginAndRegisterPage from './pages/login-and-register/login-and-register.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  // firebase auth management
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      // if the user signs in the userAuth object will have data
      if (userAuth) {
        // get the userReference from attempting to add the user to the db
        const userRef = await createUserProfileDocument(userAuth);

        console.log(this.state);

        // get a snapshot of the userRef and set the state values of the currentUser to the data from the snapshot
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          },
          // callback 
            () => {
              console.log(this.state);
          })
        });      
      } 
      // if the user is signing out the userAuth object will be null
      else {
        // set the current user to null
        this.setState({currentUser: userAuth});
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
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/login' component={LoginAndRegisterPage}/>
          <Route path='/shop' component={ShopPage}/>
        </Switch>
      </div>
    )
  }
};

export default App;
