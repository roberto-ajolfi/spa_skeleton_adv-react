import React, { Component, Fragment } from 'react';
import { Container } from 'reactstrap';
import { AppRoutes } from './Routes';
import NavigationBar from './Components/NavigationBar';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Components/Footer';

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <NavigationBar />
          <Container>
            {AppRoutes}
          </Container>
        </BrowserRouter>
      <Footer />
    </Fragment>
  );
};

export default App;