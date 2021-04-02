import React, { Component } from 'react';
import '../styles/App.scss'
//images

class Course extends Component {
   
    render(props) {
        const user = {
            "name":'Milton',
            "Premium":true
        }
        const premium = premium => user.Premium;
        const precios = money => {
            if(this.props.price === "Gratis"){
                return true
            }else{
                return false
            }
        }
        return (
            
            <div className="grid-course">
                    <img className="course-img" src={this.props.img} alt={this.props.title}/>
                {
                  premium(user.Premium) ? <div className="premium">
                  <div className="dats-course">
                  <h2 className="course-title">{this.props.title}</h2>
                  <div className="perfil-tacher">
                      <div className="teacher"></div>
                      <h3 className="nameteacher"> {this.props.teacher} </h3>
                  </div>
                      <div className="money">
                            <span>
                                {
                                    precios(this.props.price)?` ${this.props.price}`:`$ ${this.props.price} USD`
                                }
                            </span>
                        </div>                  
              </div>    
                    </div>:<div className="gratis">
                    <div className="dats-course">   
                        <h2 className="course-title">Title from course Gratis</h2>
                        <div className="perfil-tacher">
                            <div className="teacher"></div>
                            <h3 className="nameteacher">Milton Estrada</h3>
                        </div>
                        <div className="money"><span>Gratis</span></div>
                </div> 
                </div>
                }
            </div>
    
        );
    }
}


export default Course;