import React, { Component, Suspense } from 'react';
import classes from './App.module.css';
import Layout from './components/layout/layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Logout from './containers/Auth/Logout/Logout';
import {connect} from 'react-redux';
import * as actions from './store/actions/index';

const orders = React.lazy(() => import('./containers/Orders/Orders'));
const auth = React.lazy(() => import('./containers/Auth/Auth'));

class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/auth" component={auth} />
        <Route path="/" exact component={BurgerBuilder} />
        <Redirect to="/" />
      </Switch>
    );
    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={orders} />
          <Route path="/logout" component={Logout} />
          <Route path="/auth" component={auth} />
          <Route path="/" exact component={BurgerBuilder} />
          <Redirect to="/" />
        </Switch>
      );
    }
    return (
      <div className={classes.App}>
        <Layout>
          <Suspense fallback={<div>asdf</div>}>
            {routes}
          </Suspense>
        </Layout>
      </div>
    );
    }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !==null
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
