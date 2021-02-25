import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// context provider vvv
import injectContext from './store/appContext';

// sections vvv
import Home from './Sections/Home';
import NotFound from './Sections/NotFound';
import Contact from './Sections/Contact';


// components
import Navbar from './Components/Navbar';

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
      </BrowserRouter>
    </>
  );
}

export default injectContext(App);
