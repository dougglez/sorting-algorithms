import React, { Component } from 'react';

class BubbleSort extends Component {
    constructor(props) {
        super(props);

        this.state = {
            test: "It's working!!"
        }
    }
    render() {
        return (
            <div>
                {test}
            </div>
        )
    }
}

export default BubbleSort;