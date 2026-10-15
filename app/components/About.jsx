import Image from 'next/image';
import AboutImage from '@/assets/images/banner2.jpg';

export default function About() {
  return (
    <section className="relative w-full bg-[#0f0e0e] overflow-hidden">
      <div className="relative w-full h-[690px]">
        <Image
          src={AboutImage}
          alt="Black and white independent movie theater"
          fill
          className="w-full h-full object-cover brightness-60" 
          priority
        />

        <div className="absolute inset-0 bg-[#0f0e0e]/30"></div>  

        <div className="absolute inset-0 flex flex-col justify-end px-16 py-8">
          <div className="max-w-2xl">
            <p className="text-[#468a9a] font-semibold text-sm mb-3 tracking-wider uppercase">
              About ScreamFlix
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-[#eeeeee] mb-6 leading-tight drop-shadow-2xl">
              Your Horror Movie Destination
            </h2>
            <p className="text-[#eeeeee]/90 text-lg leading-relaxed mb-8  drop-shadow-lg">
              Curated collection of 15 essential horror films from cult classics to modern nightmares. Discover the best in suspense, supernatural, psychological, and slasher genres. Whether you're a seasoned horror fan or new to the genre, these films are sure to thrill and chill. Join us in exploring the dark and captivating world of horror cinema!
            </p>
            <p className="text-[#eeeeee]/90 text-lg leading-relaxed mb-8  drop-shadow-lg">
              ScreamFlix is an independent collective of passionate college film enthusiasts who celebrate the artistry of horror cinema. Far from the "lowbrow" label often slapped on the genre, we love its ability to tap into primal fears, challenge societal taboos, and deliver unmatched emotional thrills. From grainy VHS cult classics to modern slashers, our collection honors the filmmakers who thrive in this genre, proving that true horror isn't just entertainment: it's a mirror to our deepest human instincts. Join our underground screening society and discover why the screams are worth celebrating.
            </p>
            <a
              href="/movies"
              className="group relative text-base font-bold px-6 py-3 rounded-xl bg-[#541212]/90 hover:bg-[#541212] border border-[#468a9a]/50 hover:border-[#468a9a] text-[#eeeeee] backdrop-blur-sm shadow-lg hover:shadow-teal-600/20 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            >
              <span className="relative z-10">Explore Movies</span> 
              <span className="absolute inset-0 bg-gradient-to-r from-[#468a9a]/20 to-[#541212]/30 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
