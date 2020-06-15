import React,{useEffect} from 'react'
import classes from './Cockpit.css'
const cockpit=(props)=>{
    useEffect(() => {
        console.log('[Cockpit.js] useEffect')
        //如何让http只在第一次请求而不是每次渲染都请求
        const timer=setTimeout(()=>{
            alert('Saved data to cloud')
        },1000)
        return () =>{
            clearTimeout(timer)
            console.log('[cockpit.js] cleanup work in useEffect')
        }
    },[props.persons])

    //第二个 useEffect
    useEffect(()=>{
        console.log('[Cockpit.js]  2nd useEffect')
        return () =>{
            console.log('[cockpit.js] cleanup work in 2nd useEffect')
        }
    })


    let assignedClasses=[]
    let btnClass = ''
    if(props.showPersons){
        btnClass = classes.Red
    }

    if(props.personsLength<=2){
        assignedClasses.push(classes.red)  //classes =['red']
    }
    if(props.personsLength<=1){
        assignedClasses.push(classes.bold)  //classes =['red bold']
    }
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working</p>
            <button onClick={props.clicked} className={btnClass}>Toggle Person</button>
            {/*<button onClick={this.switchNameHandler.bind(this, 'Hisen')}>Switch Name第一种方法传参数</button>*/}
            {/*<button onClick={() => this.switchNameHandler('xxx')}>Switch Name第二种方法传参数</button>*/}
        </div>
    )
}
export default React.memo(cockpit)
