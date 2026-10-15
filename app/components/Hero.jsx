import Image from 'next/image';
import BannerImage from '@/assets/images/banner.jpg';

export default function Hero() {
  return (
    <section className="relative w-full bg-[#0f0e0e] overflow-hidden">
      
      <div className="relative w-full h-[420px]">
        <Image
          src={BannerImage}
          alt="Hero image of movie theater"
          width={1500}
          height={420}                    
          className="absolute inset-0 translate-x-[43px] bg-black/50 backdrop-blur-sm transition-opacity duration-300 ease-out brightness-75"
          priority
        />

        <div className="absolute inset-0 bg-[#0f0e0e]/40"></div> 

        <div className="absolute inset-0 flex flex-col items-center pt-[35px] text-center">
          
          <div className="relative left-0 top-[7px] backdrop-blur-xs bg-[#6E6F71]/50 w-[950px] h-[379px] max-w-[calc(100vw-2rem)] flex flex-col items-center justify-start px-8 py-4 rounded-2xl inline-block">
            <h1 className="pt-[70px] text-5xl font-black leading-[1.2] drop-shadow-2xl tracking-tight w-full h-auto">
              <span className="-translate-y-2 block text-[#0F0E0E] [-webkit-text-stroke:1.5px_#541212]">Track the movies you've seen. <br/>
              Save the ones you haven't <br/> Share the experience with friends.</span>
            </h1>
          
          <a
            href="/movies"
            className="relative top-[50px] mt-6 shrink-0 bg-[#541212] hover:bg-[#468a9a] text-[#eeeeee] px-7 py-3 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-[#468a9a]/50 hover:scale-105 border-2 border-[#468a9a]/30"
          >
            Your first choice for horror cinema
          </a>
          </div>
         
        </div>
      </div>
    </section>
  );
}

