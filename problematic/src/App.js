import React, {Component} from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import Login from './components/Login'
import Error from './components/Error'
import CelebrityProfile from './components/CelebrityProfile'
import UserProfile from './components/UserProfile'
import About from './components/About'
import TweetForm from './components/TweetForm'
import { successLogin, loginUserFromToken } from './Redux/Actions/authActions.js'
import { connect } from 'react-redux'


//components
import Home from './components/Home'

class App extends Component {


  componentDidMount() {
    let token = localStorage.getItem('token')
    if(token){
        this.props.loginUserFromToken(localStorage.getItem('token'))
    }
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
                <Route path="/" component={Nav} />
                <Route path="/home" component={Home} />
                <Route path="/newTweet" component={TweetForm}/>
                <Route path="/about" component={About} />
                <Route path="/login" component={Login} />
                <Route path="/api/v1/users/profile" component={UserProfile} />
                <Route path="/celebrities/:id" component={CelebrityProfile}/>
                <Route path="/404" component={Error} />
          </BrowserRouter>
        </header>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn
  }
}


export default connect(mapStateToProps, { successLogin, loginUserFromToken } )(App)
