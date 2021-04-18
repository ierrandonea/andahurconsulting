import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// sections vvv
import Home from './Sections/Home';
import NotFound from './Sections/NotFound';
import Contact from './Sections/Contact';

// components
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Fallback from './Components/loading';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={Fallback}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contacto" component={Contact} />
          </Switch>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
