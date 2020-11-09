import React from 'react'
import BuggyCounter from './component/BuggyCounter'
import './component/App.css'
// import ConditionalComponent from './component/ConditionalComponent'
import ErrorBoundary from './component/ErrorBoundary'

export class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <p>Click the number till 5</p>
        <ErrorBoundary iColor='green'>
          <BuggyCounter />
        </ErrorBoundary>
        <ErrorBoundary iColor='yellow'>
          <BuggyCounter />
        </ErrorBoundary>
        <ErrorBoundary iColor='blue'>
          <BuggyCounter />
        </ErrorBoundary>
        {/* <ErrorBoundary>
          <BuggyCounter />
          <ConditionalComponent color='red' />
          <ConditionalComponent color='blue' />
          <ConditionalComponent />
        </ErrorBoundary> */}
      </div>
    )
  }
}

export default App