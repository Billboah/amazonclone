import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import Login from './Login'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { setUserEmail, setUserName } from './features/basketSlice'
import { useDispatch } from 'react-redux'
import SearchPage from './SearchPage'

const App: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUserName(user.displayName))
        dispatch(setUserEmail(user.email))
      } else {
        dispatch(setUserName(null))
        dispatch(setUserEmail(null))
      }
    })
  })
  return (
    <Router>
      <div className="w-screen scrollbar-hide">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/search">
            <Header />
            <SearchPage />
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
  )
}

export default App
