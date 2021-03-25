import React, { Component } from 'react'
import './styles/App.scss'
import images from './images/course1.JPG'
//images
import imgbanner from './images/DSC_0119.JPG'

//components
import Banner from './components/Banner'
import Course from './components/Course'
import Form from './components/Form'

//json
import Courses from './database/Courses.json'
//array from Courses 

class Apjx extends Component {
    state={
        Courses:Courses
    }
    render() {
        return (
            <>
            <Banner img={imgbanner} title="learning whit theres" paragragh="Your future from less "/>
            <Form title="User"/>
            <div className="list-course">
                {
                   this.state.Courses.map(course=><Course title={course.title} teacher={course.teacher} price={course.price} img={images} />)
                }
            </div>
          </>
        );
    }
}

export default Apjx;