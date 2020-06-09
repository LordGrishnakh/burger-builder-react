import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "./actions";
import GoogleAuthStyling from "./GoogleAuthStyling.module.css";

class GoogleAuth extends React.Component {
  componentDidMount() {
    console.log(this.props);
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "961251054746-najg7pdugnltuqm9rpnhj8v5mjvbtk4v.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();

          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId(), this.auth.currentUser.get().getAuthResponse().id_token);
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return <div></div>;
    } else if (this.props.isSignedIn) {
      return (
        <button className="ui red google button" onClick={this.onSignOutClick}>
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button
          className={GoogleAuthStyling.SignIn}
          onClick={this.onSignInClick}
        >
          <img src="img/googleBtn.svg" alt="googleBtn" />
          <p>Sign in with Google</p>
        </button>
      );
    }
  }

  render() {
    return (
      <React.Fragment>
        {/* <div>{this.renderAuthButton()}</div> */}
        <button
          className={GoogleAuthStyling.SignIn}
          onClick={this.onSignInClick}
        >
          <img src="img/googleBtn.svg" alt="googleBtn" />
          <p>Sign in with Google</p>
        </button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
