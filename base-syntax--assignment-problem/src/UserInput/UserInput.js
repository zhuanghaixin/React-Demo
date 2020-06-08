import React from 'react'
import './UserInput.css'

const userInput=(props)=>{
    const style={
        border:'2px solid red'
    }
    return (
        <div>
            <input
                style={style}
                type="text" onChange={props.changed} value={props.currentName}/>
        </div>
    )
}
export default userInput
