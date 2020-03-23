import React, { useEffect, Suspense } from 'react';
import classes from './App.module.css';
import Layout from './components/layout/layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Logout from './containers/Auth/Logout/Logout';
import Shop from './components/Shop/Shop';
import LandingPage from './components/LandingPage/LandingPage';
import {connect} from 'react-redux';
import * as actions from './store/actions/index';

const orders = React.lazy(() => import('./containers/Orders/Orders'));
const auth = React.lazy(() => import('./containers/Auth/Auth'));

const App = props => {
  const { onTryAutoSignup } = props;
  // const { onTryAutoSignup } = props

  useEffect(() => {
    onTryAutoSignup();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onTryAutoSignup])

  let routes = (
    <Switch>
      <Route path="/auth" component={auth} />
      <Route path="/shop" component={Shop} />
      <Route path="/burgerBuilder" exact component={BurgerBuilder} />
      <Route path="/" exact component={LandingPage} />
      <Redirect to="/" />
    </Switch>
  );
  if (props.isAuthenticated) {
    routes = (
      <Switch>
        <Route path="/orders" component={orders} />
        <Route path="/shop" component={Shop} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/logout" component={Logout} />
        <Route path="/auth" component={auth} />
        <Route path="/burgerBuilder" component={BurgerBuilder} />
        <Route path="/" exact component={LandingPage} />
        <Redirect to="/" />
      </Switch>
    );
  }
  return (
    <div className={classes.App}>
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>
          {routes}
        </Suspense>
      </Layout>
    </div>
  );
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
