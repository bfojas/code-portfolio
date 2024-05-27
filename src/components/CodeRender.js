import React from 'react';
import SyntaxHighlighter, { createElement } from 'react-syntax-highlighter';
import { atomOneDark
  as theme } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const updateValue = (child, value) => {
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

export default function CodeRender({ text }) {
  return (
    <SyntaxHighlighter
        language='javascript'
        renderer={({
            rows,
            stylesheet,
            useInlineStyles,
        }) => {
            return rows.map((row, index) => {
                const children = row.children.map((child, i, arr) => {
                  const currentValue = child.children?.[0].value
                  const nextValue = arr[i+1]?.children?.[0].value;
                  if (nextValue === ',\n') {
                    return updateValue(child, currentValue + ',')
                  }

                  if (nextValue === ';\n') {
                    return updateValue(child, currentValue + ';')
                  }

                  if ([',\n', ';\n'].includes(currentValue)) {
                    return updateValue(child, '\n')
                  }

                  if (/\S/.test(child.children?.[0]?.value)) return child;
                  return {
                    ...child,
                    tagName: 'div',
                    properties: {
                      className: ['multi-line-tab']
                    }
                  }
                });

                const lineNumberElement = children?.shift();
                console.log('line', lineNumberElement)

                if (lineNumberElement) {
                    row.children = [
                        lineNumberElement,
                        {
                            children,
                            properties: {
                                className: ['multi-line'],
                            },
                            tagName: 'div',
                            type: 'element',
                        },
                    ];
                }

                return createElement({
                    node: row,
                    stylesheet,
                    useInlineStyles,
                    key: index,
                });
            });
        }}
        showLineNumbers={true}
        style={theme}
        lineNumberContainerStyle={{
          minWidth: '2.25em',backgroundColor: '#f5f5f5',
        }}
        wrapLongLines={true}
    >
        {text}
    </SyntaxHighlighter>
  )
}
