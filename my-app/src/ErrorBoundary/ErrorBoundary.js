import React,{Component} from 'react';

class ErrorBoundary extends Component {
    state={
        hasError:false,
        errorMessage:''
    }
    componentDidCatch(error, errorInfo) {
        // 你同样可以将错误日志上报给服务器
        // logErrorToMyService(error, errorInfo);

        this.setState({hasError:true, errorMessage:error})
    }

    render(){
        if(this.state.hasError){
            return <h1>{this.state.errorMessage}</h1>
        }else{
            return this.props.children
        }

    }
}

export default ErrorBoundary;
