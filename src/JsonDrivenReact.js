import React, { Component } from 'react'

class JsonDrivenReact extends Component {
  render() {
    if (!this.props.props) return null

    let json = this.props.props // The JSON is on this components props

    return this.toReact(json)
  }

  toReact(json) {
    if (Array.isArray(json) || (json && typeof json === 'object')) {
      return ([].concat(json).map((item, index) => {
        // Supply a React key if none given
        item.props = item.props || {}
        item.props.key = item.props.key || index

        return React.createElement(
          item.element,
          item.props,
          React.createElement(JsonDrivenReact, {props: item.children}))
      }))
    } else {
      // Json is plain content
      return json
    }
  }
}

export default JsonDrivenReact
