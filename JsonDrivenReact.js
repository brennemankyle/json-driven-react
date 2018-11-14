import React, { Component } from 'react'

class JsonDrivenHtml extends Component {
  render = () => {
    let json = this.props.props // The JSON is on this components props

    return React.createElement(
      json.element,
      json.props,
      this.jsonChildren(json.children))
  }

  jsonChildren = (children) => {
    if (Array.isArray(children) || (children && typeof children === 'object')) {
      // Variable "children" is JSON, needs to be turned into html
      return ([].concat(children).map((child, index) => {
        child.key = child.key || index // Supply a React key if none given

        // Recursive call to this component
        return React.createElement(JsonDrivenHtml, {props: child, key: child.key})
      }))
    } else {
      // Variable "children" is plain content
      return children
    }
  }
}

export default JsonDrivenHtml
