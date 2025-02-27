import Head from 'next/head';
import Link from 'next/link';

export default function Portfolio() {
  return (
    <div className="flex min-h-screen text-white flex-col">
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>

      <div className="flex flex-1">
        <aside className="flex-1 bg-[#1E2A3A] text-center p-8 border-r-4 border-[#293544]">
          <h2 className="text-2xl mb-6">Kauã Campaner</h2>
          <img src="/img/profile.jpeg" alt="Kauã Campaner" className="w-44 h-44 rounded-full mb-6 mx-auto" />
          <p className="mb-6">Hello, my name is Kauã Campaner and I'm a <span className="text-[#54B689]">FullStack Developer</span>.</p>
          <p id="welcome-text" className="font-bold">Welcome!</p>
          <ul className="flex justify-center gap-6 my-6">
            <li>
              <Link href="https://github.com/KauaZao0o" target="_blank" rel="noopener noreferrer">
                <img src="/img/github-logo.png" alt="GitHub" className="w-8 h-8" />
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/user073/" target="_blank" rel="noopener noreferrer">
                <img src="/img/linkedin-logo.png" alt="LinkedIn" className="w-8 h-8" />
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/kauua_liima/" target="_blank" rel="noopener noreferrer">
                <img src="/img/instagram-logo.png" alt="Instagram" className="w-8 h-8" />
              </Link>
            </li>
          </ul>
        </aside>

        <section className="flex-1 bg-[#111821] p-12">
          <h1 className="text-4xl mb-4">Kauã Campaner</h1>
          <p className="text-2xl mb-4"><span className="text-[#54B689]">FullStack Developer</span></p>
          <p className="mb-6 max-w-[75%]">Developer with over 3 years of experience, I consider myself an Amateur Developer who study programming in my house and I frequent the AMS-Systems Development course in the third year of high school at Etec Rodrigues de Abreu school. The Back-end programming languages that I studied most were: C, C++, C#, Python, Php and in Front-end they were HTML, CSS and Javascript. I really like Information Security, with a special focus on Windows and Linux servers.</p>
          <p className="mb-6 max-w-[75%]">I work on both the <span className="text-[#54B689]">front</span> and <span className="text-[#54B689]">back-end</span>, and I love technology, I study every day to become better and write quality code.</p>
          <Link href="https://drive.google.com/drive/folders/19aGRfElBdfMLK6oJPBe5wpSXJjY_fzp-?usp=sharing">
            <div className="flex items-center gap-2 bg-[#54B689] text-white px-6 py-3 rounded-lg transition-all hover:bg-transparent hover:border hover:border-[#54B689]">
              <i className="fas fa-share"></i>
              <span>Certificates</span>
            </div>
          </Link>

          <h2 className="text-3xl mt-12 mb-6 border-t-2 border-[#999] pt-6">My Skills</h2>
          <div className="flex flex-wrap gap-6">
            <div className="flex-1 min-w-[200px]">
              <p className="text-2xl mb-4 border-l-4 border-[#54B689] pl-2">Front-end</p>
              <div className="flex gap-4">
                <img src="/caminho/html.png" alt="HTML" className="w-10 h-10" />
                <img src="/caminho/css.png" alt="CSS" className="w-10 h-10" />
                <img src="/caminho/javascript.png" alt="JavaScript" className="w-10 h-10" />
              </div>
            </div>
            
            <div className="flex-1 min-w-[200px]">
              <p className="text-2xl mb-4 border-l-4 border-[#54B689] pl-2">Back-end</p>
              <div className="flex gap-4">
                <img src="/caminho/python.png" alt="Python" className="w-10 h-10" />
                <img src="/caminho/php.png" alt="PHP" className="w-10 h-10" />
                <img src="/caminho/c.png" alt="C" className="w-10 h-10" />
              </div>
            </div>
            
            <div className="flex-1 min-w-[200px]">
              <p className="text-2xl mb-4 border-l-4 border-[#54B689] pl-2">Databases</p>
              <div className="flex gap-4">
                <img src="/caminho/mariadb.png" alt="MariaDB" className="w-10 h-10" />
                <img src="/caminho/mysql.png" alt="MySQL" className="w-10 h-10" />
              </div>
            </div>
            
            <div className="flex-1 min-w-[200px]">
              <p className="text-2xl mb-4 border-l-4 border-[#54B689] pl-2">Front-end Frameworks</p>
              <div className="flex gap-4">
                <img src="/caminho/react.png" alt="React" className="w-10 h-10" />
                <img src="/caminho/nextjs.png" alt="Next.js" className="w-10 h-10" />
              </div>
            </div>

            <div className="flex-1 min-w-[200px]">
              <p className="text-2xl mb-4 border-l-4 border-[#54B689] pl-2">Back-end Frameworks</p>
              <div className="flex gap-4">
                <img src="/caminho/laravel.png" alt="Laravel" className="w-10 h-10" />
              </div>
            </div>

            <div className="flex-1 min-w-[200px]">
              <p className="text-2xl mb-4 border-l-4 border-[#54B689] pl-2">Tools</p>
              <div className="flex gap-4">
                <img src="/caminho/linux.png" alt="Linux" className="w-10 h-10" />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-[#1E2A3A] text-white text-center py-6 mt-auto">
      <Link href="/" className="text-white hover:text-[#21b621]">
          KauaZao0o &copy; 2024 - 2025
        </Link>
      </footer>
    </div>
  );
}
