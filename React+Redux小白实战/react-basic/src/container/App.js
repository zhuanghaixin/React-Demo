import React, {Component} from 'react';
import './App.css';
import Persons from '../components/Persons/Persons'
import MyHeader from '../components/Header/Header'


//有状态组件
class App extends Component {
    //constructor
    constructor(props){
        super(props)
        // props.title='xxx'
        console.log('props.title')
        console.log(props.title)
        console.log(props)
        // props.title='xxx'
        console.log("[App.js] constructor is running...",props)
        this.state={
            persons: [
                {id:1,name: '庄海鑫', count: 30},
                {id:2,name: 'Hens', count: 310},
                {id:3,name: 'Ben', count: 31},
                {id:4,name: 'TOm', count: 30},
                {id:5,name: 'das1', count: 330}
            ],
            showPersons:false
        }
    }
    //componentWillMount
    componentWillMount(){


        console.log("[App.js] componentWillMount is running...",)
    }

    switchNameHandler=(newName)=>{
        console.log('Hello')
        // this.state.peson[0].name='米斯特'  //报错 Do not mutate state directly. Use setState()

        this.setState({
            persons: [
                {id:1,name: newName, count: 3120},
                {id:2,name: 'Heddds', count: 310},
                {id:3,name: 'Bensss', count: 31},
                {id:4,name: 'TOmsss', count: 3000},
                {id:5,name: 'das1', count: 330}
            ],
        })


    }
    nameChangeHandler=(event,id)=>{

        const personIndex=this.state.persons.findIndex(p=>{

            return p.id===id
        })

        //拿到修改内容的对象
        const person={
            ...this.state.persons[personIndex]
        }
        //将当前内容进行修改

        person.name=event.target.value

        const persons=[...this.state.persons]
        //将修改内容的对象 重新赋值给原来的对象
        persons[personIndex]=person
        this.setState({
            persons: persons
        })
    }
    togglePersonsHandler=()=>{
        console.log(this.state)
        const doesShow = this.state.showPersons
        this.setState({showPersons: !doesShow})
    }
    //删除
    deletePersonHandler=(personIndex)=>{
        // const persons=this.state.persons
        const persons=[...this.state.persons]
        persons.splice(personIndex,1)
        this.setState({
            persons:persons
        })
    }

    render() {
        console.log("[App.js] render is running...",)

        let persons=null
        if(this.state.showPersons){
            persons=<Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangeHandler}
                showPersons={this.state.showPersons}


            />
                // 直接返回一个Person的组件
            //     (
            //     <div>
            //         {
            //             this.state.persons.map((person,index)=>{
            //                 return <Person
            //                     myClick={()=>this.deletePersonHandler(index)}
            //                     changed={(event)=>this.nameChangeHandler(event,person.id)}
            //                     key={index}
            //                     name={person.name}
            //                     count={person.count }
            //
            //                 />
            //                 console.log(person)
            //             })
            //         }
            //     </div>
            // )

        }


        return (
            <div className="App">
                <MyHeader
                    appTitle={this.props.title}
                    persons={this.state.persons}
                    switched={this.switchNameHandler.bind(this, '米修在线')}
                    toggled={this.togglePersonsHandler}
                    showPersons={this.state.showPersons}
                ></MyHeader>
                {/*<h2>Hello World</h2>*/}
                {/*<p className={classes.join(' ')}>Hi.React App</p>*/}
                {/*<button*/}
                {/*    style={s tyle}*/}
                {/*    onClick={this.switchNameHandler.bind(this, '米修在线')}>更该状态值*/}
                {/*</button>*/}
                {/*<button*/}
                {/*    style={style}*/}
                {/*    onClick={this.togglePersonsHandler}>内容切换*/}
                {/*</button>*/}
                {persons}
            </div>
        )
    }
    //componentDidMount
    componentDidMount(){
        console.log("[App.js] componentDidMount is running...",)
    }
}


export default App;
