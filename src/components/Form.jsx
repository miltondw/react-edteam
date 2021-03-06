import React, { Component } from 'react';

class Form extends Component {

    

    state = {
        "name":"",
        "email":""
    }
    
    onChange = e => {

        this.setState({
           [e.target.name]:e.target.value
   
       }) 
    }
        
    
    render() {
        return (
            <>
            <div className="form-content">
                <form className="form" id="form">
                    <h2 className="form__title"> {this.props.title} </h2>
                    <div className="form-content__input">
                        <label className="form__label">Your Name</label>
                        <input 
                            name="name" 
                            type="text" 
                            className="form__input" 
                            placeholder="Your name her" 
                            onChange={this.onChange} 
                        />
                    </div>
                    <div className="form-content__input">
                        <label className="form__label">Your Email</label>
                        <input 
                            name="email" 
                            type="email" 
                            className="form__input" 
                            placeholder="Your Email her" 
                            onChange={this.onChange} 
                        />
                    </div>
                        <input type="submit" className="money" value="Submit" />
                </form>
            </div>
            <div className="user">
                <h2 className="user__title">{`Hello ${this.state.name}`}</h2>
                <p className="user__emial">{`Your email is ${this.state.email}`}</p>
            </div>
            </>
        );
    }

    componentDidMount(){
       console.log(document.getElementById('form'))
    }
    componentDidUpdate(prevProps,prevState){
        console.log(prevProps)
        console.log(prevState)
        console.log('---------')



    }
}

export default Form;