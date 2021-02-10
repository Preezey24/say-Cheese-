import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { Route, Switch, useLocation, Redirect } from 'react-router-dom'; 
import SignUpFormPage from './components/SignUpFormPage'; 
import * as photoActions from './store/photo'; 
import Navigation from "./components/Navigation";
import SplashPage from "./components/SplashPage";  
import HomePage from './components/HomePage';
import PhotoPage from './components/PhotoPage';
import SearchResults from './components/PhotoPage/SearchResults'; 

function App() {
  const dispatch = useDispatch(); 
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
  }, []);
  useEffect(() => {
    const currentPath = location.pathname; 
    const pathArr = currentPath.split("/"); 
    const tag = pathArr[pathArr.length-1]; 
    if (tag.length >= 2) {
      setTag(tag); 
    };
  }, [location]);
  
  return (
    <>
    <Navigation />
    {!auth.current && (
      <>
        <Redirect to="/" />
        <Switch>
          <Route exact path="/">
            <SplashPage/>
          </Route>
          <Route path="/signup">
            <SignUpFormPage />
          </Route>
        </Switch>
      </>
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
