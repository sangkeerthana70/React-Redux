import React, { component } from 'react'

class AddNinja extends Component {
    render(){
        return(
            <div>
                <form>
                    <label htmlFor = "name">Name:</label>
                    <input type = "text" id="name" onChange={}/>
                    <label htmlFor = "name">Age:</label>
                    <input type = "text" id="name" onChange={}/>
                    <label htmlFor = "name">Belt:</label>
                    <input type = "text" id="name" onChange={}/>
                </form>
            </div>
        )
    }
}