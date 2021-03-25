import React, { Component } from 'react';

class Banner extends Component {
    render(props) {
        return (
            <div className="banner">
                <div className="text">
                    <h1 className="banner__title">{this.props.title}</h1>
                    <p className="banner__paragrah">{this.props.paragragh}</p>
                </div>
               <img className="banner" src={this.props.img} alt=""/>
            </div>
        );
    }
}

export default Banner;