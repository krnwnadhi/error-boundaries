import React, { Component } from 'react'

class ErrorBoundary extends Component {
    state = {
        error: null,
        errorInfo: null
    };

    componentDidCatch(error, errorInfo) {
        // Catch errors in any components below and re-render with error message
        this.setState({
            error: error,
            errorInfo: errorInfo,
        });
        console.log(errorInfo);
        // You can also log error messages to an error reporting service here
    }

    render() {
        if (this.state.errorInfo) {
            // Error path
            return (
                <div>
                    <h2>Oops, Something went wrong.</h2>
                    <details style={{ whiteSpace: 'pre-wrap', color: this.props.iColor }} >
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo.componentStack}
                    </details>
                </div>
            );
        }
        // Normally, just render children
        return this.props.children;
    }
}

export default ErrorBoundary
