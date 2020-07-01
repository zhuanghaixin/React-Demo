import React,{Component} from 'react'
import Modal from '../../components/UI/Modal/Modal'
import Aux from '../Aux/Aux'

const withErrorHandler = (WrappedComponent,axios) => {
    return class extends Component{
        state={
            error:null
        }

        UNSAFE_componentWillMount() {

           this.reqInterceptor= axios.interceptors.request.use(req=>{
                this.setState({error:null})
                return req
            })
            this.resInterceptor=axios.interceptors.response.use(res=>res,error=>{
                this.setState({error:error})
                console.log(this.state.error)
            })
        }
        componentWillUnmount(){
            console.log('Will UnMount...',this.reqInterceptor,this.resInterceptor)
            axios.interceptors.request.eject(this.reqInterceptor)
            axios.interceptors.request.eject(this.resInterceptor)
            console.log('Will UnMount',this.reqInterceptor,this.resInterceptor)
        }
        errorConfirmedHandler=()=>{
            this.setState({error:null})
        }


        render(){
            return (
                <Aux>
                    <Modal show={this.state.error}
                           modalClosed={this.errorConfirmedHandler}
                    >
                        Something didn't work:
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props}/>
                </Aux>
            )
        }
    }


}

export default withErrorHandler
