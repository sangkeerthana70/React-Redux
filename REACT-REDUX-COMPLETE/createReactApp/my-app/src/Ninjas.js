import React, { Component } from 'react';//import react components

//class based components
class Ninjas extends Component{
    render(){//render method that returns a JSX template
        //console.log(this.props);//this refers to the component of class app dot props are  the properties of the component.
        //const { name, age, belt } = this.props;

        const { ninjas } = this.props;
        const ninjaList = ninjas.map(ninja => {
            return (
               <div className = "ninja" key = { ninja.id }> 
                    <div>Name: { ninja.name }</div>
                    <div>Age: { ninja.age }</div>
                    <div>Belt: { ninja.belt }</div>

                </div>
            )            
        })
        //restructuring
        return(//jsx template that has a class name of "ninja" and many nested compenents
            <div className="ninja-list">
                { ninjaList }                
            </div>
        )
    }
}

export default Ninjas//export to index.js