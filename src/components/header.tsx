import { Camera } from 'lucide-react';

export default function Header() {
  return (
    <header className="px-4 lg:px-16 xl:px-32 2xl:px-44 fixed top-0 left-0 w-full backdrop-blur-[2px] bg-gradient-to-gray-50 bg-gradient-to-b from-gray-100 to-gray-100/0 z-20 py-4 border-b-gray-300/10 border-b">
      <div className="flex justify-between">
        <nav className="flex text-lg text-slate-700 justify-start items-center gap-x-12">
          <a className="hidden lg:block font-fantasy text-2xl" href="/#home">
            BIONGO
          </a>
          <a className="hidden lg:block" href="/#influencer">
            Influencer
          </a>
          <a className="hidden lg:block" href="/#code">
            Code
          </a>
          <a className="hidden lg:block" href="/#game">
            Game
          </a>
          <a className="hidden lg:block" href="/#video">
            Video
          </a>
          <a className="hidden lg:block" href="/#music">
            Music
          </a>
          <a className="hidden lg:block" href="/#statistics">
            Statistics
          </a>
          <a className="hidden lg:block" href="/#books">
            Books
          </a>
        </nav>
        <div className="flex text-2xl slate-700 justify-start items-center gap-x-4">
          <a target="_blank" href="https://github.com/SamuelQZQ">
            <Camera />
          </a>
        </div>
      </div>
    </header>
  );
}
