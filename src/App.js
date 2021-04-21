import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// components
import Navbar from './Components/Navbar';

// sections vvv
const Home = lazy(() => import('./Sections/Home'));
// import NotFound from './Sections/NotFound';
const Contact = lazy(() => import('./Sections/Contact'));
const Projects = lazy(() => import('./Sections/Projects'));
const KeyPositions = lazy(() => import('./Sections/KeyPositions'));

// components lazy
const Footer = lazy(() => import('./Components/Footer'));


const App = () => {

  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contacto" component={Contact} />
            <Route exact path="/proyectos" component={Projects} />
            <Route exact path="/roles-clave" component={KeyPositions} />
          </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
