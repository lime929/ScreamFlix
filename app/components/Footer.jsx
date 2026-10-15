export default function Footer() {
  return (
    <footer className="mt-16 border-t border-[#541212]/50 bg-[#0E0D0D]/95 px-6 pb-6 pt-10 shadow-2xl backdrop-blur-md">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-8 border-b border-[#468a9a]/20 pb-8 lg:flex-row">
          <div className="text-center lg:text-left">
            <p className="text-sm font-medium text-[#eeeeee]">
              © {new Date().getFullYear()}{' '}
              <span className="font-black text-[#468a9a]">ScreamFlix</span>
            </p>
            <p className="mt-2 text-xs font-mono tracking-wider text-[#468a9a]/80">
              Made with Next.js & Tailwind | IT 339
            </p>
            <p className="mt-2 text-sm font-mono tracking-wider text-[#eeeeee]/60">
              [773] xxx-xxxx | contact@screamflix.com
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-semibold text-[#eeeeee]/65">
              <li><a href="/" className="transition-colors hover:text-[#468a9a]">Home</a></li>
              <li><a href="/movies" className="transition-colors hover:text-[#468a9a]">Movies</a></li>
              <li><a href="/movies/decades" className="transition-colors hover:text-[#468a9a]">Decade Picks</a></li>
              <li><a href="/movies/reviews" className="transition-colors hover:text-[#468a9a]">Reviews</a></li>
              <li><a href="/movies/about" className="transition-colors hover:text-[#468a9a]">About</a></li>
            </ul>
          </nav>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-5 text-sm text-[#468a9a]/70 lg:flex-row">
          <p>Find your next nightmare. Share your favorite films.</p>
          <div className="flex items-center gap-5 text-sm font-bold uppercase tracking-widest">
            <a href="https://www.instagram.com/" aria-label="Instagram" className="transition-colors hover:text-[#eeeeee]">IG</a>
            <a href="https://www.youtube.com/" aria-label="YouTube" className="transition-colors hover:text-[#eeeeee]">YT</a>
            <a href="https://facebook.com/" aria-label="FaceBook" className="transition-colors hover:text-[#eeeeee]">FB</a>
          </div>
        </div>

        <div className="mt-5 border-t border-[#468a9a]/20 pt-4">
          <p className="text-center text-xs font-mono tracking-widest text-[#468a9a]/70">
            Information for this site came from{' '}
            <cite>
              <a href="https://www.imdb.com/" className="underline transition-colors hover:text-[#eeeeee]">IMDb</a>
            </cite>
          </p>
        </div>
      </div>
    </footer>
  );
}
