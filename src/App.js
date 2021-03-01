import { BrowserRouter, Route, Switch, Link, useParams, useRouteMatch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
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
        <Route component={SinglePost} path='/post/:slug' />
        <Route component={Post} path='/post' />
        <Route component={Project} path='/project' />
        <Route component={Work} path='/work'>
          {/* <Categories/> */}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

// function Categories() {
//   let { parth, url } = useRouteMatch();
//   return (
//     <BrowserRouter>
//     <Categories/>
//       <Switch> 
//         <Route component={Photography} path='/work/photo' />
//       </Switch>
//     </BrowserRouter>
//   )
// }
