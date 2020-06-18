import React from 'react';

const withClass=(WrappedComponent,className) =>{
    //f返回一个组件
    return props=>(
        <div className={className}>
            <WrappedComponent {...props}></WrappedComponent>
        </div>
    )
}


export default withClass
