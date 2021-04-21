import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// components
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Fallback from './Components/loading';

// sections vvv
const Home = lazy(() => import('./Sections/Home'));
// import NotFound from './Sections/NotFound';
const Contact = lazy(() => import('./Sections/Contact'));
const Projects = lazy(() => import('./Sections/Projects'));
const KeyPositions = lazy(() => import('./Sections/KeyPositions'));


const App = () => {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={Fallback}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contacto" component={Contact} />
            <Route exact path="/proyectos" component={Projects} />
            <Route exact path="/roles-clave" component={KeyPositions} />
          </Switch>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
