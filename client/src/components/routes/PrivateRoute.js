import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';

import AuthContext from '../../context/authentication/authContext';

function PrivateRoute({ component: Component, ...props }) {

  const { auth, userAuthenticated, loading } = useContext(AuthContext);

  useEffect(() => {
    userAuthenticated();
    // eslint-disable-next-line
  }, [])

  if(loading && !auth) return <p>Loading...</p>

  return (
    <Route 
      {...props}
      render={props => !auth && !loading ? (
        <Redirect to="/" />
      ): (
        <Component {...props} />
      )}
    />
  );

}

export default PrivateRoute;