// Code ClickityClick Component Here
import React from "react";

class ClickityClick extends React.Component {

    state = {
        count: 0
    }

    handleClick = () => {
        this.setState(prevState => (
            {count: prevState.count + 1}
            )
        )
    }

    render() {
        return(
            <div>
                <p>{this.state.count}</p>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        )
    }
}

export default ClickityClick