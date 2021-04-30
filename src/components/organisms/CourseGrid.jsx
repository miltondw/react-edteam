import React, { Component } from "react";
import withLoader from "../HOC/withLoader";
//images course
import course1 from "../../images/course1.png";
//json
import Courses from "../../database/Courses.json";
//components
import Course from "../Pages/Course";

class CourseGrid extends Component {
  render() {
    return (
      <div className="list-course">
        {Courses.map((c) => (
          <Course
            key={c.id}
            id={c.id}
            title={c.title}
            teacher={c.teacher}
            price={c.price}
            img={course1}
          />
        ))}
      </div>
    );
  }
}

export default withLoader(CourseGrid);
