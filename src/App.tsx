import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useEffect } from "react";
import { setUser } from "./features/basketSlice";
import { useDispatch } from "react-redux";
import SearchPage from "./SearchPage";

const App: React.FC=()=> {
  const dispatch = useDispatch();

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.displayName));
      } else {
        dispatch(setUser(null));
      }
    });
  });
  return (
    <Router>
      <div className="w-screen scrollbar-hide">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path='/search'>
          <Header />
          <SearchPage/>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
