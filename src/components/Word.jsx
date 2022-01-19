import React from 'react';
import { useParams } from 'react-router';


const Word = (props) => {
    const {word, color, bgcolor} = useParams()
    return(
    <div>
        <h1 style={{color: color, backgroundColor: bgcolor}}>The word2 is {word}</h1>
    </div>
    )
}

export default Word;
