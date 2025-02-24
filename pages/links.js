import Head from 'next/head';
import Link from 'next/link';

export default function Links() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#222]">
      <Head>
        <title>Links</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center gap-8 p-10 max-w-[600px] w-full">
        <Link href="/">
          <span>
            <img
              src="https://avatars.githubusercontent.com/u/99094031?s=400&u=f7b9ba68306333a51639c94d226d9fc4ddd77e25&v=4"
              alt="Foto do Perfil"
              className="w-48 h-48 rounded-full border-4 border-[#4df300aa] shadow-lg"
            />
          </span>
        </Link>

        <h1 className="text-4xl text-[#38bdaeaa]">@KauaZao0o</h1>

            <div className="flex gap-6 mb-8">
            <a
                href="https://github.com/KauaZao0o"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-[#4df300aa] bg-black/30 p-3 rounded-full transition-all hover:text-[#38bdaeaa] hover:bg-white/10 hover:shadow-lg"
            >
                <img
                src="/img/github-logo.png"
                alt="GitHub"
                className="w-8 h-8"
                />
            </a>
            <a
                href="https://www.linkedin.com/in/user073/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-[#4df300aa] bg-black/30 p-3 rounded-full transition-all hover:text-[#38bdaeaa] hover:bg-white/10 hover:shadow-lg"
            >
                <img
                src="/img/linkedin-logo.png"
                alt="LinkedIn"
                className="w-8 h-8"
                />
            </a>
            <a
                href="https://www.instagram.com/kauua_liima/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-[#4df300aa] bg-black/30 p-3 rounded-full transition-all hover:text-[#38bdaeaa] hover:bg-white/10 hover:shadow-lg"
            >
                <img
                src="/img/instagram-logo.png"
                alt="Instagram"
                className="w-8 h-8"
                />
            </a>
            </div>


        <div className="flex flex-col gap-4 w-full max-w-[400px]">
          <a
            href="https://www.codewars.com/users/KauaZao0o"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 p-4 bg-black/60 text-[#38bdaeaa] rounded-full border border-[#38bdae55] backdrop-blur-sm transition-all hover:bg-[#38bdae33] hover:-translate-y-1 hover:shadow-lg"
          >
            <img
              src="/img/Codewars.png"
              alt="Codewars"
              className="w-10 h-10"
            />
            <span>Codewars</span>
          </a>
          <a
            href="https://www.codingame.com/profile/481eee2dcd48c790a0e2de0d1124e1694309646"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 p-4 bg-black/60 text-[#38bdaeaa] rounded-full border border-[#38bdae55] backdrop-blur-sm transition-all hover:bg-[#38bdae33] hover:-translate-y-1 hover:shadow-lg"
          >
            <img
              src="/img/CodinGame.png"
              alt="CodinGame"
              className="w-10 h-10"
            />
            <span>CodinGame</span>
          </a>
          <a
            href="https://www.hackerrank.com/profile/KauaZao0o"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 p-4 bg-black/60 text-[#38bdaeaa] rounded-full border border-[#38bdae55] backdrop-blur-sm transition-all hover:bg-[#38bdae33] hover:-translate-y-1 hover:shadow-lg"
          >
            <img
              src="/img/HackerRank.png"
              alt="HackerRank"
              className="w-10 h-10"
            />
            <span>HackerRank</span>
          </a>
          <a
            href="https://100dayscss.com/progress/kauazao0o/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 p-4 bg-black/60 text-[#38bdaeaa] rounded-full border border-[#38bdae55] backdrop-blur-sm transition-all hover:bg-[#38bdae33] hover:-translate-y-1 hover:shadow-lg"
          >
            <img
              src="/img/100dayscss.png"
              alt="100dayscss"
              className="w-10 h-10"
            />
            <span>100dayscss</span>
          </a>
        </div>

        <footer className="mt-8">
          <Link href="/">
            <span className="text-white hover:text-[#21b621]">KauaZao0o &copy; 2024 - 2025</span>
          </Link>
        </footer>
      </main>
    </div>
  );
}
