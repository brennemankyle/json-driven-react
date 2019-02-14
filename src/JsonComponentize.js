class JsonComponentize {
  constructor(translator) {
    this.translator = translator
    this.translate = this.translate.bind(this)
  }

  translate(json) {
    if (Array.isArray(json) || (json && typeof json === 'object')) {
      ([].concat(json).forEach((item, index) => {
        if (typeof item.element === 'string' && !!item.element.match(/^[A-Z].*/)) {
          let component = this.translator[item.element]

          if (!component) throw new Error('Cannot find component named "' + item.element + '" in componentized translator')

          item.element = component
        } else {
          item.element = item.element
        }

        this.translate(item.children)
      }))
    }

    return json
  }
}

export default JsonComponentize
