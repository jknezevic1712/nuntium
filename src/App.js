import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.scss";

import Header from "./components/header/header.component";
import Spinner from "./components/spinner/spinner.component";

const Homepage = lazy(() => import("./pages/homepage/homepage.component"));
const Categories = lazy(() =>
  import("./pages/categories/categories.component")
);
const Login = lazy(() => import("./pages/auth/login/login.component"));
const Register = lazy(() => import("./pages/auth/register/register.component"));
const Profile = lazy(() => import("./pages/profile/profile.component"));
// const Contact = lazy(() => import("./pages/contact/contact.component"));

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-container">
        <Switch>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/categories/:urlID" component={Categories} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            {/* <Route exact path="/contact" component={Contact} /> */}
          </Suspense>
        </Switch>
      </div>
    </div>
  );
}

export default App;
