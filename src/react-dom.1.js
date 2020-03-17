function render(node, parent) {
  if(typeof node === 'string' || typeof node === 'number') {
    return parent.appendChild( document.createTextNode(node) );
  }
  let type = node.type;
  let props = node.props;

  if(type.prototype && type.prototype.isReactComponent) {
    let element = new type(props).render();
    type = element.type;
    props = element.props;
    if(typeof type === 'function') {
      render(element, parent);
    }
  }else if(typeof type === 'function') {
    let element = type(props);
    type = element.type;
    props = element.props;
    if(typeof type === 'function') {
      render(element, parent);
    }
  }
  let elementDom = document.createElement(type);
  for(let propName in props) {
    if(propName === 'children') {
      let children = props[propName];
      if(!Array.isArray(children)) {
        children = [children];
      }
      children.forEach(element => {
        render(element, elementDom);
      });
    }else if(propName === 'refer') {
      props[propName].current = elementDom;
    }else {
      elementDom.setAttribute(propName, props[propName]);
    }
  }
  parent.appendChild(elementDom);
}

export default {
  render
}