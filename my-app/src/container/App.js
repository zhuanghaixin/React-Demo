import React, {Component} from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from "../components/Cockpit/Cockpit"


class App extends Component {
    //挂载阶段
    constructor(props) {
        super(props)
        console.log('[App.js] constructor')


    }

    state = {
        persons: [
            {id: 'qwew', name: 'Max', age: 24},
            {id: 'afd', name: 'Ben', age: 22},
            {id: 'adsds', name: 'Tom', age: 29},
        ],
        otherState: 'somen other value',
        showPersons: false,
        showCockpit:true
    }

    //第二个
    static getDerivedStateFromProps(props, state) {
        console.log('[App.js] getDerivedStateFromProps', props)
        return state
    }

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons]
        persons.splice(personIndex, 1)
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
    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id
        })
        console.log('personIndex')
        console.log(personIndex)
        // 将person拷贝一份 通过...的形式
        const person = {...this.state.persons[personIndex]}

        person.name = event.target.value

        // const person=Object.assign({},this.state.persons[personIndex])

        //将persons复制一份
        const persons = [...this.state.persons]

        persons[personIndex] = person
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

    //第三个
    render() {
        console.log('[App.js] render')
        let persons = null
        if (this.state.showPersons) {
            persons =
                <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangeHandler}
                ></Persons>

        }
        return (
            <div className={classes.App}>
                <button onClick={()=>this.setState({showCockpit:false})} >Remove cockpit</button>
                { this.state.showCockpit?
                    <Cockpit
                    title={this.props.title}
                    personsLength={this.state.persons.length}
                    showPersons={this.state.showPersons}
                    clicked={this.togglePersonsHandler}
                ></Cockpit>
                :null}
                {
                    persons
                }

            </div>

        )
    }
    //第四个
    componentDidMount(){
        console.log('[App.js] componentDidMount')
    }
    //
    shouldComponentUpdate(nextProps,nextState){
        console.log('[App.js] shouldComponentUpdate')
        return true
    }

    // 更新阶段
    componentDidUpdate(){
        console.log('[App.js] componentDidUpdate')
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


