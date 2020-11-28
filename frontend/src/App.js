import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'; 
import { Route, Switch, useLocation } from 'react-router-dom'; 
import SignUpFormPage from './components/SignUpFormPage'; 
import * as sessionActions from './store/session'; 
import * as photoActions from './store/photo'; 
import Navigation from "./components/Navigation"; 
// import LoginFormPage from './components/LoginFormPage';
import HomePage from './components/HomePage';
import PhotoPage from './components/PhotoPage';
import SearchResults from './components/PhotoPage/SearchResults'; 

function App() {
  const dispatch = useDispatch(); 
  const [isLoaded, setIsLoaded] = useState(false); 
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
    console.log(currentPath); 
    const pathArr = currentPath.split("/");
    console.log(pathArr);  
    const tag = pathArr[pathArr.length-1]; 
    console.log(tag); 
    setTag(tag); 
  }, [location])
  
  return (
    <>
    <Navigation isLoaded={isLoaded} />
    {isLoaded && (
      <Switch>
        <Route exact path="/">
          <HomePage/>
        </Route>
        {/* <Route path="/login">
          <LoginFormModal />
        </Route> */}
        <Route path="/signup">
          <SignUpFormPage />
        </Route>
        <Route exact path="/photos/:photoId">
          <PhotoPage /> 
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
