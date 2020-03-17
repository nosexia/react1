function render(node, parent) {
  if(typeof node === 'string' || typeof node === 'string') {
    return parent.appendChild( document.createTextNode(node) );
  }
  let type, props;
  type = node.type;
  props = node.props;
  if(type.prototype && type.prototype.isReactComponent) {
    node = new type(props).render();
    type = node.type;
    props = node.props;
    if(typeof node === 'function') {
      render(node, parent);
    }
  }else if(typeof type === 'function') {
    node = type(props);
    type = node.type;
    props = node.props;
    if(typeof node === 'function') {
      render(node, parent);
    }    
  }
  let domElement = document.createElement(type);
  // 组合模式
  for(propName in props) {
    if(propName === 'children') {
      let children = props[propName];
      if(!Array.isArray(children)) {
        children = [children];
      }
      children.forEach(element => {
        render(element, domElement);
      });
    }else if(propName === 'class') {
      domElement.className = props[propName];
    }else if(propName === 'style') {

    }else{

    }
  }
  parent.appendChild(domElement);
}