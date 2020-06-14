import React from 'react';


function Data(props)  {

    return(

        <div>
            <h1> This is {props.firstName} </h1> 
            <h2>Student of AI and Also Participating in {props.training}</h2>
        </div>
    );
}

export default Data;