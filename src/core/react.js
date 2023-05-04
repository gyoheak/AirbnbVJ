const { createElement } = require("react");

//이거가 안쓸꺼 같은데 dom을 이런식으로 구성한다고 한다.
export const createDom = (node) => {
  if(typeof node === 'string'){
    /* text일 때*/
    // text node를 만들어서 반환한다.
    return document.createTextNode(node);
  }
  /* tag일 때*/
  // tag에 대한 element를 만든다.
  const $el = document.createElement(node.type);

  Object.entries(node.props || {})
        .filter(([attr, value]) => value)
        .forEach(([attr, value]) => (
          $el.setAttribute(attr, value)
        ));

  // node의 children virtual dom을 dom으로 반환한다.
  // 즉, 모든 virtualDOM을 순회한다.
  const children = node.children.map(createElement);

  // $el에 변환된 children dom을 추가한다.
  children.forEach(child => $el.appendChild(chile));

  // 변환된 dom을 반환한다.
  return $el;
}