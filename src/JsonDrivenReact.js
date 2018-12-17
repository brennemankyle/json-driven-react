import React, { Component } from 'react'

class JsonDrivenReact extends Component {
  render() {
    if (!this.props) return null

    let json = Object.assign({}, this.props) // The JSON is on this components props

    return this.toReact(json)
  }

  toReact(json) {
    if (Array.isArray(json) || (json && typeof json === 'object')) {
      return ([].concat(json).map((item, index) => {
        // Supply a React key if none given
        item.props = item.props || {}
        item.props.key = item.props.key || index

        if (item.children) {
          return React.createElement(
            item.element,
            item.props,
            ...this.toReact(item.children))
        } else {
          return React.createElement(
            item.element,
            item.props)
        }
      }))
    } else {
      // Json is plain content
      return json
    }
  }
}

export default JsonDrivenReact
