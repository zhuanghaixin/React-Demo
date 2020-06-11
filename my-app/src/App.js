import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    state = {
        persons: [
            {id:'qwew',name: 'Max', age: 24},
            {id:'afd',name: 'Ben', age: 22},
            {id:'adsds',name: 'Tom', age: 29},
        ],
        otherState: 'somen other value',
        showPersons: false
    }
    deletePersonHandler=(personIndex)=>{
        const persons=[...this.state.persons]
        persons.splice(personIndex,1)
        this.setState({persons: persons})
    }
    switchNameHandler = (newName) => {
        console.log('Was clicked')
        // DON'T DO THIS this.state.persons[0].name='Hisen'
        this.setState({
            persons: [
                {name: newName, age: 24},
                {name: 'Ben', age: 12},
                {name: 'Tom', age: 29},
            ],
        })
    }
    nameChangeHandler = (event,id) => {
        const personIndex=this.state.persons.findIndex(p=>{
            return p.id===id
        })
        console.log('personIndex')
        console.log(personIndex)
        // 将person拷贝一份 通过...的形式
        const person={...this.state.persons[personIndex]}

        person.name=event.target.value

        // const person=Object.assign({},this.state.persons[personIndex])

        //将persons复制一份
        const persons=[...this.state.persons]

        persons[personIndex]=person
        this.setState({
            persons: persons
        })
    }
    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons
        this.setState({
            showPersons: !doesShow,
        })
    }

    render() {
        let persons = null
        if (this.state.showPersons) {
         persons=
             <div>
             {this.state.persons.map((person,index)=>{
                return (
                    <Person
                        click={()=>this.deletePersonHandler(index)}
                        name={person.name}
                        age={person.age}
                        key={person.id}
                        changed={(event)=>this.nameChangeHandler(event,person.id)}

                    > </Person>
                )
            })}
             </div>

        }
        return (
            <div className="App">
                <h1>react</h1>
                <button onClick={this.togglePersonsHandler}>Toggle Person</button>
                <button onClick={this.switchNameHandler.bind(this, 'Hisen')}>Switch Name第一种方法传参数</button>
                <button onClick={() => this.switchNameHandler('xxx')}>Switch Name第二种方法传参数</button>
                {
                    persons
                }

            </div>
        )
    }
}

/*
React.createElement(
  type,
  [props],
  [...children]
)
创建并返回指定类型的新 React 元素。其中的类型参数既可以是标签名字符串（如 'div' 或 'span')
也可以是 React 组件 类型 （class 组件或函数组件），或是 React fragment 类型。
使用 JSX 编写的代码将会被转换成使用 React.createElement() 的形式。
如果使用了 JSX 方式，那么一般来说就不需要直接调用 React.createElement()
*/
// return React.createElement('div', null, React.createElement('h1', null, 'Hello'));


export default App;


