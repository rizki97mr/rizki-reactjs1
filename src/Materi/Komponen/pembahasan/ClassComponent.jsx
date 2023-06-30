import React from "react";

class ClassComponent extends React.Component {
    
    render() {
        return(
            <div>
                <h1>Hello World</h1>
                <h2>I AM {this.props.nama} </h2>
            </div>
        )
    }
}

export default ClassComponent;