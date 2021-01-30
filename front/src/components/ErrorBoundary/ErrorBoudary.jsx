import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, errorInfo: null }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: !!error,
      errorInfo,
    })
  }

  render() {
    if (this.state.hasError) {
      return <span>Something went wrong!</span>
    }
    return this.props.children
  }
}
