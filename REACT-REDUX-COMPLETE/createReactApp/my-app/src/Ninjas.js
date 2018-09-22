import React from 'react';

const Ninjas = ({ninjas}) => {
    //const { ninjas } = props;
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
export default Ninjas//export to index.js