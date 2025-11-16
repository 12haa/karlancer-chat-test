import Image from 'next/image';
import IconButton from './components/elements/IconButton';
import Header from './components/modules/Header';

export default function Home() {
  return (
    <div className="w-full items-center flex justify-center">
      <div className="flex min-h-screen w-[423px] bg-[#f4f4f8] font-sans flex-col ">
        <Header />
        <main>Main Content</main>
      </div>
    </div>
  );
}
