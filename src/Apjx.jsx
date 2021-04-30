import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/App.scss";
//images
import imgbanner from "./images/banner.webp";

//components
import Banner from "./components/organisms/Banner";
import CourseGrid from "./components/organisms/CourseGrid";
import Form from "./components/Pages/Form";
import ContentCourse from "./components/organisms/ContentCourse";
import Error404 from "./components/Pages/Error404";
import MainMenu from "./components/Molecules/MainMenu";
import History from "./components/Pages/History";
import Users from './components/Hooks/HookTes'
// import NoMatch from './components/Pages/NoMatch'

class Apjx extends Component {
  render() {
    return (
      <Router>
        <MainMenu />
        <Switch>
          <Route
            path="/"
            exact
            component={() => (
              <Banner
                title="Donde Empiezan todas las ideas"
                paragragh="No vale soñar si no ejecutas"
                img={imgbanner}
              />
            )}
          />
          <Route path="/cursos/:id" component={ContentCourse} />
          <Route path="/history" component={History} />
          <Route path="/cursos" component={CourseGrid} />
          <Route
            path="/formulario"
            component={() => <Form title="Pide tu futuro ya!" />}
          />
          <Route 
            path="/users"
            component={Users}
          />
          <Route component={Error404} />
        </Switch>
      </Router>
    );
  }
}

export default Apjx;
