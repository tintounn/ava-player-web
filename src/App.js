import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { request, getLocalStorageItem, setLocalStorageItem } from './utils';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Movies from './pages/Movies';
import Movie from './pages/Movie';
import Home from './pages/Home';
import Register from './pages/Register';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
    const path = window.location.pathname;

    if(path !== '/register') {
      request({
        method: 'post', url: '/valid', data: {
          token: getLocalStorageItem('token')
        }
      }).then((res) => {
        if(!path.includes('/')) {

        }
      }).catch((err) => {
        if(path !== '/login') {
          this.redirectTo('/login');
        }
      });
    }
  }

  redirectTo(url) {
    this.setState({
      redirect: url
    });
  }

  render() {
    return (
      <Router>
        <div style={{height: '100%'}}>
          <ToastContainer />
          {this.state.redirect &&
            <Redirect to={this.state.redirect} />
          }
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/" component={Home} />
            <Route exact path="/movies/:movieId" component={Movie} />

            <Route exact path="/admin" component={Admin} />

            <Route render={() => {
              return <p>404 not found</p>
            }} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
