import React, { Component } from 'react';//import react components

//class based components
class Ninjas extends Component{
    render(){//render method that returns a JSX template
        console.log(this.props);//this refers to the component of class app dot props are  the properties of the component.

        return(//jsx template that has a class name of "ninja" and many nested compenents
            <div className = "ninja"> 
                <div>Name: { this.props.name }</div>
                <div>Age: { this.props.age }</div>
                <div>Belt: { this.props.belt }</div>

            </div>
        )
    }
}

export default Ninjas//export to index.js