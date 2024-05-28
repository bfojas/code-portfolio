export const updateValue = (child, value) => {
  return {
    ...child,
    children: [
      {
        ...child.children[0],
        value
      }
    ]
  } 
};

export const addClassName = (child, className) => {
  return {
    ...child,
    properties: {
      ...child.properties,
      className: [
        ...child.properties.className,
        className
      ]
    }
  }
}

export const mergeWithPunc = (child, value, nextChild) => {
  return {
    ...child,
    children: [
      {
        ...child.children[0],
        value
      },
      addClassName(nextChild, 'line-punctuation')
    ]
  } 
};

export const convertToLink = (child, currentValue) => {
  return {
    ...child,
    tagName: 'a',
    properties: {
      ...child.properties,
      href: currentValue.replace(/['"]/g, '')
    }
  }
};
