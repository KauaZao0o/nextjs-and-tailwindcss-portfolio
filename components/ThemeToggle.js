import { useEffect, useState } from 'react';

const ThemeToggle = ({ onToggle }) => {
  const [theme, setTheme] = useState('');

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
      document.body.classList.add(currentTheme);
      setTheme(currentTheme);
    } else {
      localStorage.setItem('theme', 'dark');
      document.body.classList.add('dark');
      setTheme('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    document.body.classList.remove(theme);
    document.body.classList.add(newTheme);
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);

    // Verifica se onToggle é uma função antes de chamá-la
    if (typeof onToggle === 'function') {
      onToggle(newTheme); // Passa o novo tema para o componente pai
    }
  };

  return (
    <button onClick={toggleTheme} className="absolute top-5 right-5 text-2xl cursor-pointer">
      {theme === 'light' ? '🌞' : '🌙'}
    </button>
  );
};

export default ThemeToggle;