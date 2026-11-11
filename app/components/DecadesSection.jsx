import Image from "next/image";
import Link from "next/link";

export default function DecadeSection({ decade, movies }) {
  const top3 = movies
        // 1. checks if movie year is same decade
    .filter(movie => movie.year >= decade
        // 2. keeps if year is before decade's end 
        // 3. && means both statements 1 & 2 must be true
         && movie.year < decade + 10)
    // Newest movie goes first
    .sort((a, b) => b.year - a.year)  
    // takes only first 3 movies from the decade
    .slice(0, 3);

  

  return (
    <section className="mb-16 last:mb-0">
      <h2 className="text-3xl md:text-4xl font-black text-[#eeeeee] mb-8 drop-shadow-2xl tracking-tight">
        {decade}'s Top Picks
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {top3.map((movie) => (
          <div key={movie._id} className="group">
            <div className="relative w-72 h-48 md:w-96 md:h-64 lg:w-80 lg:h-52 mx-auto rounded-xl overflow-hidden shadow-lg">
              <Link
          href={`/movies/${movie._id}`}>
              <Image
                src={movie.images[1]}
                alt={movie.name}
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-300"
              />
              </Link>
            </div>
            {/* Brief Details */}
            <div className="mt-4 px-2">
              <h3 className="font-bold text-[#eeeeee] text-xl mb-1 line-clamp-2">
                {movie.name}
              </h3>
              <p className="text-[#468a9a]/90 text-md">
                {movie.year} • {movie.runtimeMinutes} minutes
              </p>
               <p className="text-md leading-relaxed text-zinc-300 pt-2">
                {movie.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}