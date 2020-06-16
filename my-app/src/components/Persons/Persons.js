import React ,{PureComponent}from 'react';
import Person from "./Person/Person";
class Persons extends PureComponent{
    // static getDerivedStateFromProps(props,state){
    //     console.log('[Persons.js] getDerivedStateFromProps)')
    //     return state
    // }

    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     console.log('[Persons.js] getSnapshotBeforeUpdate')
    //     return {message:'Snapshot'}
    // }

    // shouldComponentUpdate(nextProps,nextState){
    //     console.log('[Persons.js] shouldComponentUpdate')
    //     if( nextProps.persons !==this.props.persons ||
    //         nextProps.changed !==this.props.changed ||
    //         nextProps.clicked !==this.props.clicked
    //     ){
    //         return true
    //     }else{
    //         return false
    //     }
    //     // return true
    // }


    render(){
        console.log('[Persons.js] rendering')
        return  this.props.persons.map((person, index) => {
            return <Person
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={index}
                changed={(event) => this.props.changed(event, person.id)}

            >
            </Person>

        })
    }
    componentDidUpdate(prevProps, prevState,shapShot){
        console.log('[Persons.js] componentDidUpdate')
        console.log(shapShot)
    }
    // 卸载
    componentWillUnmount(){
        console.log('[Persons.js] componentWillUnmount')
    }

}

export default Persons
