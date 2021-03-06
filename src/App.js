import { BrowserRouter, Route, Switch, Link, useParams, useRouteMatch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import NavBar from "./components/NavBar";
import Work from "./components/Work";
import Photography from "./components/Photography";
import Conceptual from "./components/ConceptualArt";
import Dance from "./components/Dance";
import Design from "./components/Design";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Home} exact path='/' />
        <Route component={About} path='/about' />
        <Route component={Project} path='/project' />
        <Route component={Photography} path='/work/photo' />
        <Route component={Design} path='/work/design'/>
        <Route component={Conceptual} path='/work/art'/> 
        <Route component={Dance} path='/work/dance'/>
        <Route component={Work} path='/work'>
          <Work />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

