import Image from 'next/image';
import DecadesImage from '@/assets/images/banner4.jpg';

export default function DecadesHeader() {
    return (
        <header className="mb-20 text-left">
          <h1 className="text-5xl font-black text-zinc-300 bg-clip-text text-transparent drop-shadow-2xl mb-6">
            The Best Horror Movies By Decade
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl">
            The Best of the 1980s, 2000s, and 2020s!
          </p>
          <Image
            src={DecadesImage}
            alt="A sinister looking woman with blue lighting"
            width={1200}
            height={400}
            sizes="100vw"
            className="mt-8 h-auto max-h-96 w-full rounded-xl object-cover shadow-2xl"
          />
        </header>
    )

}

