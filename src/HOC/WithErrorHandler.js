import React, { Component } from 'react';
import Modal from '../components/UI/Modal/Modal';
import AuxComponent from './AuxComponent';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    }


    componentDidMount() {
      this.requestInterceptor = axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });
      this.responseInterceptor = axios.interceptors.response.use(res => res, error => {
        this.setState({ error: error });
      });
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.requestInterceptor);
      axios.interceptors.request.eject(this.responseInterceptor);
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    }

    render() {
      return (
        <AuxComponent>
          <Modal show={this.state.error} hideModal={this.errorConfirmedHandler}>
            {this.state.error ? this.state.error.message: null}
          </Modal>
          <WrappedComponent {...this.props} />
        </AuxComponent>
      );
    }
  }
}

export default withErrorHandler;