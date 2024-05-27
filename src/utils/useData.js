import { useState, useEffect } from 'react';
import data from './data.json';
import codeFormatter from './codeFormatter';

export default function useData(format = 'code') {
  console.log('data', data)
  const [text, setText] = useState('');

  useEffect(() => {
    const setData = async () => {
      const formattedText = codeFormatter(data);
  
      setText(formattedText);
    };

    setData()
  }, [])
  
  return codeFormatter(data);
}
