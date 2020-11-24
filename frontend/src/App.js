import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'; 
import { Route, Switch } from 'react-router-dom'; 
import SignUpFormPage from './components/SignUpFormPage'; 
import * as sessionActions from './store/session'; 
import * as photoActions from './store/photo'; 
import Navigation from "./components/Navigation"; 
import LoginFormPage from './components/LoginFormPage';
import HomePage from './components/HomePage';

function App() {
  const dispatch = useDispatch(); 
  const [isLoaded, setIsLoaded] = useState(false); 
  const [photos, setPhotos] = useState(''); 
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]); 
  useEffect(() => {
    dispatch(photoActions.getPhotos()).then((state) => console.log(state))
  }, [dispatch]);
  
  return (
    <>
    <Navigation isLoaded={isLoaded} />
    {/* <HomePage photos={photos}/> */}
    {isLoaded && (
      <Switch>
        <Route path="/login">
          <LoginFormPage />
        </Route>
        <Route path="/signup">
          <SignUpFormPage />
        </Route>
      </Switch>
    )}
  </>
  );
}

export default App;
