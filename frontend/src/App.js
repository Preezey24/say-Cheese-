import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { Route, Switch, useLocation } from 'react-router-dom'; 
import SignUpFormPage from './components/SignUpFormPage'; 
import * as sessionActions from './store/session'; 
import * as photoActions from './store/photo'; 
import Navigation from "./components/Navigation";
import SplashPage from "./components/SplashPage";  
import HomePage from './components/HomePage';
import PhotoPage from './components/PhotoPage';
import SearchResults from './components/PhotoPage/SearchResults'; 

function App() {
  const dispatch = useDispatch(); 
  const [isLoaded, setIsLoaded] = useState(false); 
  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  const [tag, setTag] = useState(''); 
  const location = useLocation();
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]); 
  useEffect(() => {
    dispatch(photoActions.getPhotos()); 
  }, [dispatch]);
  useEffect(() => {
    const currentPath = location.pathname; 
    const pathArr = currentPath.split("/"); 
    const tag = pathArr[pathArr.length-1]; 
    setTag(tag); 
  }, [location])
  
  return (
    <>
    <Navigation isLoaded={isLoaded} />
    {isLoaded && isAuthenticated && (
      <Switch>
        <Route exact path="/">
          <HomePage/>
        </Route>
        <Route path="/signup">
          <SignUpFormPage />
        </Route>
        <Route exact path="/photos/:photoId">
          <PhotoPage/> 
        </Route>
        <Route exact path={`/photos/tags/${tag}`}>
          <SearchResults /> 
        </Route>
      </Switch>
    )}
    {!isAuthenticated && (
      <Route exact path="/">
        <SplashPage/>
      </Route>
    )}
  </>
  );
}

export default App;
