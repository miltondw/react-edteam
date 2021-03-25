import React, { Component } from 'react'
import './styles/App.scss'
//images
import imgbanner from './images/DSC_0119.JPG'
import logo from './images/course1.JPG'
//components
import Banner from './components/Banner'
import Course from './components/Course'
import Form from './components/Form'
//array from Courses
const Courses = [
    {
        "title":"HTML5 Basic",
        "teacher":"Milton Estrada",
        "price":"Gratis",
        "img":logo
    },
    {
        "title":"CSS3 Basic",
        "teacher":"Milton Estrada",
        "price":"Gratis",
        "img":logo
    },
    {
        "title":"Javascript Basic",
        "teacher":"Milton Estrada",
        "price":"Gratis",
        "img":logo
    },
    {
        "title":"HTML5 Avanzado",
        "teacher":"Milton Estrada",
        "price":10,
        "img":logo
    },
    {
        "title":"CSS3 Animation",
        "teacher":"Milton Estrada",
        "price":15,
        "img":logo
    },
    {
        "title":"Javascript Avanzado",
        "teacher":"Milton Estrada",
        "price":20,
        "img":logo
    },
]

class Apjx extends Component {

    render() {
        return (
            <>
            <Banner img={imgbanner} title="learning whit theres" paragragh="Your future from less "/>
            <Form title="User"/>
            <div className="list-course">
                {
                    Courses.map(course=><Course title={course.title} teacher={course.teacher} price={course.price} img={course.img} />)
                }
            </div>
          </>
        );
    }
}

export default Apjx;