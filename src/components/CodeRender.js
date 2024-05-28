import React from 'react';
import SyntaxHighlighter, { createElement } from 'react-syntax-highlighter';
import { atomOneDark
  as theme } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {
  updateValue,
  addClassName,
  mergeWithPunc,
  convertToLink
} from '@utils/renderAlters'


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

                  if (/http/.test(currentValue)) {
                    child = convertToLink(child, currentValue)
                  }

                  if ([',\n', ';\n'].includes(nextValue)) {
                    return mergeWithPunc(child, currentValue, arr[i+1])
                  }

                  if ([',\n', ';\n'].includes(currentValue)) {
                    return updateValue(child, '\n')
                  }

                  if(/: /.test(nextValue)) {
                    return addClassName(child, 'obj-key-line')
                  }

                  if(/: /.test(currentValue)) {
                    return addClassName(child, 'maintain-space')
                  }

                  if (/\S/.test(currentValue)) return child;
                  return {
                    ...child,
                    tagName: 'span',
                    properties: {
                      className: ['multi-line-tab']
                    }
                  }
                });

                const lineNumberElement = children?.shift();

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
