import React from 'react'

function StudentDetails(props) {
    /*
    props = {
        name: 'Marta',
        city: 'Madrid',
        onDelete: function(){},
        id: 1
    }

    */
    return (
        <div >
            {props.name} {props.city}
            {/* When you want to call a function and pass parameters wrap it in a callback */}
            <button 
            onClick={() => { props.onDelete(props.id)  }} >Delete</button>
              {/* When you want to call a function and not  pass ane parameters call it this way */}
              {/* <button 
            onClick={ props.onDelete} >Delete</button> */}
         </div>
    )
}

export default StudentDetails