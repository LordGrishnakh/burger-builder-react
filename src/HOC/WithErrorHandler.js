import React, { useState, useEffect } from 'react';
import Modal from '../components/UI/Modal/Modal';
import AuxComponent from './AuxComponent';

const withErrorHandler = (WrappedComponent, axios) => {
  return props => {
    const [error, setError] = useState(null);

    const requestInterceptor = axios.interceptors.request.use(req => {
      setError(null);
      return req;
    });
    const responseInterceptor = axios.interceptors.response.use(res => res, err => {
      setError(err);
    });

    useEffect(() => {
      return () => {
        axios.interceptors.request.eject(requestInterceptor);
        axios.interceptors.request.eject(responseInterceptor);
      };
    }, [requestInterceptor, responseInterceptor]);

    const errorConfirmedHandler = () => {
      setError(null);
    }

    return (
      <AuxComponent>
        <Modal show={error} hideModal={errorConfirmedHandler}>
          {error ? error.message : null}
        </Modal>
        <WrappedComponent {...props} />
      </AuxComponent>
    );
  }
}

export default withErrorHandler;