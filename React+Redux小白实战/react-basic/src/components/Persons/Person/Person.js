import React,{Component} from 'react'
import './Person.css'

class Person extends Component {
    //constructor
    constructor(props) {
        super(props)
        console.log("[Person.js] constructor is running...", props)

    }

    //componentWillMount
    componentWillMount() {
        console.log("[Person.js] componentWillMount is running...",)
    }
    render() {
        return (<div className="Person"

            >
                <h1 onClick={this.props.myClick}>Hello, 我是{this.props.name},已经拥有{this.props.count}个作品</h1>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} defaultValue={this.props.name}/>
            </div>
        )
    }
    //componentDidMount
    componentDidMount(){
        console.log("[Person.js] componentDidMount is running...",)
    }
}
export default Person;
