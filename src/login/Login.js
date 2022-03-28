import React from 'react';

class Login extends React.Component{

    state={
        username:'',
        pwd:''
    }
    handleChange = (e) =>{
        const {name,value} = e.target
        this.setState({[name]:value})
    }

    handleSubmit = (e) => {

    }

    render(){
        return (
            <div>
                <div>
                    <form onSubmit = {this.handleSubmit}>
                    <input type='username' name='user' placeholder='Username' required onChange = {this.handleChange}/>
                    <input type='password' name='pwd' placeholder='Password' required onChange = {this.handleChange} />
                    <button onSubmit>Login</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;