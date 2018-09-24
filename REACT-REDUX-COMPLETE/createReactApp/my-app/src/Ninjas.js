import React from 'react';
import './Ninjas.css';

const Ninjas = ({ninjas, deleteNinja}) => {
    //const { ninjas } = props;
    // const ninjaList = ninjas.map(ninja => {
    //     if (ninja.age > 20) {
    //         return (
    //             <div className = "ninja" key = { ninja.id }> 
    //                 <div>Name: { ninja.name }</div>
    //                 <div>Age: { ninja.age }</div>
    //                 <div>Belt: { ninja.belt }</div>
    //             </div>        
    //         )  
    //     }  else {
    //     return null;
    //     }  
    // })

    //restructuring
    return(//jsx template that has a class name of "ninja" and many nested compenents
        <div className="ninja-list">
            {
                ninjas.map(ninja => {
                    //ternary operator
                    return ninja.age > 20 ? (
                        <div className = "ninja" key = { ninja.id }> 
                            <div>Name: { ninja.name }</div>
                            <div>Age: { ninja.age }</div>
                            <div>Belt: { ninja.belt }</div>
                            <button onClick={() => {deleteNinja(ninja.id)}}>Delete ninja</button>
                        </div>        
                    ) : null;
                }) 
            }   
        </div>
    )
}
export default Ninjas//export to index.js