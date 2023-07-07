import React from "react";

const Input = ({label, type, name, onChange}) => {
    return (
        <div>
            <label>
                <label> {label}:</label>
                <br />
                <input type="type" name={name} onChange={e => onChange(e.target.value)}/>
                <br />
            </label>
            <br />
        </div>
    )
}

const ShowErrors = ({errors}) => {
    return (
        <ul style={{ color: 'red', marginLeft: '-20px' }}>
            {
                errors.map((errors, i) => <li key={i}>{errors}</li>)
            }
        </ul>
    )
}

export default class Validation extends React.Component {
    state = {
        email: '',
        password: '',
        errors: []
    }

    handleSubmit = event => {
        event.preventDefault();
        const {email, password} = this.state;

        let message = []

        if(email.length === 0) {
            message = [...message, 'Email tidak boleh kosong'];
        }
        
        if(password.length === 0) {
            message = [...message, 'Password tidak boleh kosong'];
        }

        // eslint-disable-next-line no-useless-escape
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!re.test(String(email).toLowerCase())) {
            message = [...message, 'Email tidak valid'];
        }
        
        if(password.length < 8) {
            message = [...message, 'Password terlalu pendek'];
        }

        if(message.length > 0) {
            this.setState({
                errors: message
            });
            
        }else {
            alert(`
            Email: ${this.state.email}
            Password: ${this.state.password}
            `);
            this.setState ({
                errors: []
            })
        }
    }

    render () {
        const style = {
            width: '400px',
            margin: '100px auto 0',
            border: '1px solid black',
            padding: '10px'
        }

        return (
            <div style={style}>
                {
                    this.state.errors && <ShowErrors errors={this.state.errors}/>
                }
                <h3>Login</h3>
                <form onSubmit={this.handleSubmit}>
                    <Input type="text" name="email" label="email" onChange={value => this.setState({email: value})} />
                    <Input type="password" name="password" label="Password" onChange={value => this.setState({password: value})} />
                    <br />
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}