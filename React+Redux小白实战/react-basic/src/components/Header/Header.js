import React from 'react'
import  './Header.css';
const MyHeader=(props)=>{
    // const classes=["red","bold"].join(" ")  //class="red bold"
    const assignedClasses=[]
    //行间样式
    const style = {
        backgroundColor: 'green', //复合样式需要驼峰的模式
        color:'white',
        font: 'inherit',
        border: '1px solid blue ',
        padding: '8px',
        cursor: 'pointer'
    }
    if(props.showPersons){
        style.backgroundColor='red'
    }
    if(props.persons.length<=5){


        assignedClasses.push('red')

    }
    if(props.persons.length<=1){
        assignedClasses.push('bold')
    }
    return (
        <div><h2>{props.appTitle}</h2>
            <p className={assignedClasses.join(' ')}>Hi.React App</p>
            <button
                style={style}
                onClick={props.switched}>更该状态值
            </button>
            <button
                style={style}
                onClick={props.toggled }>内容切换
            </button>
        </div>
    )
}

export default MyHeader
