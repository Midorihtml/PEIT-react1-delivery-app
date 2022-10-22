import React, { createContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, Header } from './components/';
import { useGeolocation } from './hooks&aux/useGeolocation';

export const LocationContext = createContext()

export const App = () => {
  const currentLocation = useGeolocation();

  return (
    <Router>
      <LocationContext.Provider value={currentLocation}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<h1>404 Not Found</h1>} />
        </Routes>
      </LocationContext.Provider>
    </Router>
  );
}


