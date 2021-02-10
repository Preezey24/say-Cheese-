import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { Route, Switch, useLocation, useHistory } from 'react-router-dom'; 
import SignUpFormPage from './components/SignUpFormPage'; 
import * as photoActions from './store/photo'; 
import Navigation from "./components/Navigation";
import SplashPage from "./components/SplashPage";  
import HomePage from './components/HomePage';
import PhotoPage from './components/PhotoPage';
import SearchResults from './components/PhotoPage/SearchResults'; 

function App() {
  const dispatch = useDispatch(); 
  const history = useHistory(); 
  const auth = useRef(false); 
  const [tag, setTag] = useState(''); 
  const location = useLocation();
  const user = useSelector(state => state.session.user);
  if (user) {
    auth.current = true; 
  } else {
    auth.current = false; 
  }
  useEffect(() => {
    dispatch(photoActions.getPhotos()); 
  }, [dispatch]);
  
  return (
    <>
    <Navigation />
    {!auth.current && (
      <Switch>
        <Route exact path="/">
          <SplashPage/>
        </Route>
        <Route path="/signup">
          <SignUpFormPage />
        </Route>
      </Switch>
    )}
    {auth.current && (
      <Switch>
        <Route exact path="/">
          <HomePage/>
        </Route>
        <Route exact path="/photos/:photoId">
          <PhotoPage/> 
        </Route>
        <Route exact path={`/photos/tags/${tag}`}>
          <SearchResults /> 
        </Route>
      </Switch>
    )}
    </>
  );
}

export default App;
