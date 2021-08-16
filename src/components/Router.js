import React from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";

const AppRouter = ({ blog, refreshUser, isLoggedIn, userObj }) => {
  return (
    <Router>
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/">
              <Home blog={blog} userObj={userObj} refreshUser={refreshUser} />
            </Route>
            <Redirect from="*" to="/" />
          </>
        ) : (
          <Route exact path="/">
            <Auth />
          </Route>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
