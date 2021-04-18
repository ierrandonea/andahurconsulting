import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// sections vvv
import Home from './Sections/Home';
import NotFound from './Sections/NotFound';
import Contact from './Sections/Contact';

// components
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contacto" component={Contact} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
