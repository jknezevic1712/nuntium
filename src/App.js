import React, { useEffect, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";

import "./App.scss";

import Header from "./components/header/header.component";
import Spinner from "./components/spinner/spinner.component";

const Homepage = lazy(() => import("./pages/homepage/homepage.component"));
const BlogPageContainer = lazy(() =>
  import("./components/blog-page/blog-page.container")
);
const Login = lazy(() => import("./pages/auth/login/login.component"));
const Register = lazy(() => import("./pages/auth/register/register.component"));
const ProfileContainer = lazy(() =>
  import("./pages/profile/profile.container")
);
const Contact = lazy(() => import("./pages/contact/contact.component"));

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <div className="App-container">
        <Switch>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/blogs/:urlID" component={BlogPageContainer} />
            <Route
              exact
              path="/login"
              render={() => (currentUser ? <Redirect to="/" /> : <Login />)}
            />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={ProfileContainer} />
            <Route exact path="/contact" component={Contact} />
          </Suspense>
        </Switch>
      </div>
    </div>
  );
};

export default App;
