export default function codeFormatter(obj) {
  const code = Object.entries(obj).map(([key, value]) => {
    const formattedValue = `${JSON.stringify(value, null, 2)}`
    return `const ${key} = ${formattedValue};\n\n`;
  }).join('');

  return code.replace(/\n$/, '');
}
