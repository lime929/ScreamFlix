import Image from 'next/image';
import AboutImage from '@/assets/images/banner3.jpg';

export default function AboutHero() {
  return (
    <section className="relative mb-20 h-[28rem] overflow-hidden rounded-b-3xl">
      <Image
        src={AboutImage}
        alt="Spooky house with trees"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f0e0e]/95 via-[#0f0e0e]/55 to-transparent" />
      <div className="absolute inset-0 flex items-end px-6 pb-10 md:px-12 md:pb-14">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#79b9c4]">
            Welcome to ScreamFlix
          </p>
          <h1 className="text-4xl font-black leading-[0.95] tracking-tight text-[#eeeeee] md:text-6xl">
            Horror movies are better together.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#eeeeee]/80 md:text-lg">
            Find your next favorite nightmare, keep track of what you have seen, and share the films that stay with you.
          </p>
        </div>
      </div>
    </section>
  );
}
