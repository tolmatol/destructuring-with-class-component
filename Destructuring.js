import React, { Component } from 'react';

class Destructuring extends Component {
    render(props) {
        const {name, rollNo} = this.props
        return (
            <div>
                Hello {name} your Roll No is {rollNo}
            </div>
        );
    }
}

export default Destructuring;