class JsonComponentize {
  constructor(translator) {
    this.translator = translator
  }

  translate(json) {
    if (Array.isArray(json) || (json && typeof json === 'object')) {
      ([].concat(json).forEach((item, index) => {
        item.element = typeof item.element === 'string' && !!item.element.match(/^[A-Z].*/)
          ? this.translator[item.element]
          : item.element

        this.translate(item.children)
      }))
    }
  }
}

export default JsonComponentize
