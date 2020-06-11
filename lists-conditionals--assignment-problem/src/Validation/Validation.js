import React from 'react'
const validation=(props)=>{
    const length=props.inputLength
    console.log(length)
   let validationMessage="Text too short"
    if(props.inputLength>5){
        validationMessage="Text long enough"
    }

    return (
        <div>

            {/*{*/}
            {/*    props.inputLength>5?<p>Text long enough</p>:<p>Text too short</p>*/}
            {/*}*/}
            <p>{validationMessage}</p>
        </div>

    )
}

export default validation
