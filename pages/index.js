import Head from 'next/head';
import Link from 'next/link';
import ThemeToggle from '/components/ThemeToggle'; // Importando o componente ThemeToggle
import { useEffect, useState } from 'react';

export default function Home() {
  const [theme, setTheme] = useState('dark'); // Estado para controlar o tema

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme') || 'dark';
    setTheme(currentTheme);
    document.body.classList.add(currentTheme);
  }, []);

  // Função para atualizar o tema no componente pai
  const handleThemeToggle = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <div className={`flex justify-center items-center min-h-screen ${theme === 'dark' ? 'bg-[#222]' : 'bg-[#f0f0f0]'}`}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Github profile background Photo" />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>

      <main className="relative" style={{ overflow: 'hidden'}}>
        <div className={`flex flex-col justify-center items-center gap-5 ${theme === 'dark' ? 'bg-black/60' : 'bg-white/60'} rounded-lg p-20 w-[635px] relative overflow-hidden shadow-lg`}>
          <h1 className={`text-5xl font-bold ${theme === 'dark' ? 'text-[#4df300aa]' : 'text-[#4df300]'} animate-typing`}>Hello there!</h1>
          <h1 className={`text-5xl font-bold ${theme === 'dark' ? 'text-[#4df300aa]' : 'text-[#4df300]'} animate-typing`}>My name is Kauã</h1>

          <div className="flex gap-5 mt-5">
            <Link href="/links">
              <span className={`${theme === 'dark' ? 'text-[#38bdaeaa]' : 'text-[#38bdae]'} text-2xl italic hover:underline`}>Links</span>
            </Link>
            <Link href="/projects">
              <span className={`${theme === 'dark' ? 'text-[#38bdaeaa]' : 'text-[#38bdae]'} text-2xl italic hover:underline`}>Projects</span>
            </Link>
            <Link href="/portfolio">
              <span className={`${theme === 'dark' ? 'text-[#38bdaeaa]' : 'text-[#38bdae]'} text-2xl italic hover:underline`}>Portfolio</span>
            </Link>
          </div>

          <div className={`absolute w-24 h-24 ${theme === 'dark' ? 'bg-[#70a5fdaa]' : 'bg-[#70a5fd]'} blur-2xl top-0 left-0`}></div>
          <div className={`absolute w-24 h-24 ${theme === 'dark' ? 'bg-[#70a5fdaa]' : 'bg-[#70a5fd]'} blur-2xl bottom-0 right-0`}></div>
          <div className={`absolute w-24 h-24 ${theme === 'dark' ? 'bg-[#70a5fdaa]' : 'bg-[#70a5fd]'} blur-2xl`}></div>
          <div className={`absolute w-full h-full bg-gradient-to-br ${theme === 'dark' ? 'from-[#70a5fd60] to-[#00000090]' : 'from-[#70a5fd] to-[#ffffff90]'} blur-lg rounded-lg -z-10`}></div>
        </div>

        <div className={`absolute w-full h-full ${theme === 'dark' ? 'bg-black/70' : 'bg-white/70'} blur-3xl -z-20`}></div>
      </main>

      {/* Passando a função handleThemeToggle como prop para o ThemeToggle */}
      <ThemeToggle onToggle={handleThemeToggle} />
    </div>
  );
}