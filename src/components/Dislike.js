import React, {useState} from 'react'

function Dislike() {
    //const [STATE, FUNCTION] = useState(DEFAULT)
    const [dislikeNumber, updateNumber] = useState(0)
    const [name, updateName] = useState('Manish')
    const [text, updateText] = useState('Dislike')

    const handleClick = () => {
        updateNumber(dislikeNumber+1)  
        updateName('Alvaro')
    }
    /*
        return (
        <button onClick={handleClick} >{dislikeNumber} {name} Dislike</button>
    )
    */

    return (
        <button onClick={() => { 
             updateNumber(dislikeNumber+1)  
             updateName('Alvaro')
        }  } >{dislikeNumber} {name} Dislike</button>
    )
}

export default Dislike
