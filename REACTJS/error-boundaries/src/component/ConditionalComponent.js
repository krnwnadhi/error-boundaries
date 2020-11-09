import React, { Component } from 'react'

class ConditionalComponent extends Component {
    render() {
        if (this.props.color === 'blue') {
            return (
                <div
                    style={{
                        height: '50px',
                        width: '50px',
                        background: 'blue'
                    }}
                >
                    Blue
                </div>
            );
        } else if (this.props.color === 'red') {
            return (
                <div
                    style={{
                        height: '50px',
                        width: '50px',
                        background: 'red'
                    }}
                >
                    Red
                </div>
            );
        } else {
            return <div>No Color</div>
        }
    }
}

export default ConditionalComponent

