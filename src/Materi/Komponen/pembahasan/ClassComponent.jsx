import React from "react";

class ClassComponent extends React.Component {
    state = {
        value: 0
    }

    handleMinus = () => {
        if(this.state.value > 0) {
            this.setState({value: this.state.value - 1})
        }
    }

    handlePlus = () => {
        this.setState({value: this.state.value + 1})
    }

    render() {
        return(
            <div>
                <h1>Hello World</h1>
                <h2>I AM {this.props.nama} </h2>
                <h4>Number</h4>
                <button onClick={this.handleMinus}> - </button>
                <span>{' '} {this.state.value} {' '}</span>
                <button onClick={this.handlePlus}> +</button>
            </div>
        )
    }
}

export default ClassComponent;