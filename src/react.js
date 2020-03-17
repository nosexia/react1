class Component {
  constructor(props) {
    this.props = props;

    this.batchUpdate = false;
    this.batchQueue = [];
  }

  setState(newState) {
    if(this.batchUpdate) {
      this.batchQueue.push(newState)
    }
  }
  // 此处源码是原型方法
  static isReactComponent = true;
}
function createElement(type, config, children) {
    let props = {...config};
    let childrenlength = arguments.length -2;
    if(childrenlength === 1) {
      props.children = children;
    }else{
      props.children = [...arguments].slice(2);
    }
    return {
      $$typeof: Symbol.for('react.element'),
      props,
      type
    }
}



function createRef() {
  const refObject = {
    current: null
  }
  Object.seal(refObject);
  return refObject;
}


module.exports = {
  createElement,
  Component,
  createRef
}