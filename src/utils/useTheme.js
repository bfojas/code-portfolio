import { useState, useEffect } from 'react';

export default function useTheme() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    // Add the appropriate class to the body element
    if (dark) {
      document.body.classList.add('theme-dark');
      document.body.classList.remove('theme-light');
    } else {
      document.body.classList.add('theme-light');
      document.body.classList.remove('theme-dark');
    }

    // Clean up by removing the class when the component unmounts or prop changes
    return () => {
      document.body.classList.remove('theme-dark');
      document.body.classList.remove('theme-light');
    };
  }, [dark]);

  return [dark, setDark];
}
