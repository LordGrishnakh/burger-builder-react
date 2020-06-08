import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/index';
import { Redirect } from 'react-router-dom';

const Logout = props => {
  const {onLogout, onLogoutGoogle} = props;

  useEffect(() => {
    onLogout();
    onLogoutGoogle();
    window.gapi.auth2.getAuthInstance().signOut()
  }, [onLogout, onLogoutGoogle]);

  return(
    <Redirect to="/" />
  );
}

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(actions.logout()),
    onLogoutGoogle: () => dispatch(actions.signOut())
  }
}

export default connect(null, mapDispatchToProps)(Logout);