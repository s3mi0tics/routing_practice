import React from 'react';
import { useParams } from 'react-router';


const Number = (props) => {
    const {number} = useParams()
    return(
    <div>
        {!isNaN(number)?
        <h1>The number is {number}</h1>:
        <h1>The Word is {number}</h1>}
    </div>
    )
}

export default Number;
