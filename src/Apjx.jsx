import React, { Component } from 'react'
import {
    BrowserRouter as Router, Route, Switch
  } from "react-router-dom";
import './styles/App.scss'
//images
import imgbanner from './images/banner.webp'


//components
import Banner from './components/Banner'
import CourseGrid from './components/CourseGrid'
import Form from './components/Form';
import ContentCourse from './components/ContentCourse'
// import NoMatch from './components/NoMatch'
 
class Apjx extends Component {

    render() { 
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={()=><Banner title="Donde Empiezan todas las ideas" paragragh="No vale soñar si no ejecutas" img={imgbanner} />}/>
                    <Route path="/cursos/:id" component={ContentCourse}/>
                    <Route path="/cursos" component={CourseGrid}/>
                    <Route path="/formulario" component={()=><Form title="Pide tu futuro ya!" />}/>
                    <Route component={()=><Banner title="¿Te perdiste?" paragragh="No importa perder el camino , sino seguir!" img={imgbanner} />} />
                </Switch>
            </Router>
        )
    }
}

export default Apjx;