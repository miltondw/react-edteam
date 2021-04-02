import React, { Component } from 'react';

//images course
 import course1 from '../images/course1.png'
// import course2 from '../images/course2.png'
// import course3 from '../images/course3.png'
// import course4 from '../images/course4.png'
// import course5 from '../images/course5.png'
// import course6 from '../images/course6.png'


//json
import Courses from '../database/Courses.json'
//components
import Course from './Course'


class CourseGrid extends Component {
    render() {
        return (
            <div className="list-course" >
                {Courses.map(c=><Course key={c.id} id={c.id}  title={c.title} teacher={c.teacher} price={c.price} img={course1} />)}
            </div>
        );
    }
}

export default CourseGrid;