import React from "react";

type CounterState = {
    count: number
}

export default class Counter extends React.Component<{}, CounterState> {
    state = {
        count: 0
    };
    
    constructor(props: {}) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>{this.state.count}</h2>
                <button onClick={this.increment}>Zwiększ</button>
            </div>
        )
    }
    
    increment = () => {
        this.setState({ count: this.state.count + 1 });
    }
}
