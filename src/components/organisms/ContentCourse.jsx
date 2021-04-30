import React, { Component } from "react";
import Courses from "../../database/Courses.json";
import course2 from "../../images/course2.png";
import Error404 from "../Pages/Error404";
class ContentCourse extends Component {
  render() {
    const CurseActual = Courses.filter(
      (c) => c.id === parseInt(this.props.match.params.id)
    )[0];
    const precios = (money) => {
      if (CurseActual.price === "Gratis") {
        return true;
      } else {
        return false;
      }
    };
    return CurseActual ? (
      <div className="Course-description">
        <img className="course-img" src={course2} alt={CurseActual.title} />
        <div className="dats-course">
          <h1 className="course-title">{CurseActual.title}</h1>
          <div className="perfil-tacher">
            <div className="teacher"></div>
            <h3 className="nameteacher"> {CurseActual.teacher} </h3>
          </div>
          <div className="money">
            <span>
              {precios(CurseActual.price)
                ? ` ${CurseActual.price}`
                : `$ ${CurseActual.price} USD`}
            </span>
          </div>
        </div>
      </div>
    ) : (
      <Error404 />
    );
  }
}

export default ContentCourse;
