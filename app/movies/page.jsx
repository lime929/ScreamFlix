import movies from "@/horror-movies.json";
import MovieCard from "../components/MovieCard.jsx";

export const metadata = {
  title: 'Movies | ScreamFlix',
  description: 'Browse a curated collection of horror films, from classic slashers to modern thrillers, and discover your next favorite scare.',
};

export default function MoviesPage() {
  return (
    <section className="px-4 py-6 bg-zinc-950 min-h-screen">
      <div className="container-xl lg:container m-auto px-4 py-6 max-w-7xl">
         {/* Header Content */}
        <header className="mb-10">
          <h1 className="text-5xl font-black text-zinc-300 bg-clip-text mb-6">
            Featured Horror Films
          </h1>
          <hr class="border-t-4 border-[#468a9a] my-6" />
        </header>
        {/* if no movies then show no movies found */}
        {movies.length === 0 ? (
          <p className="text-zinc-400 text-center py-20">No movies found</p>
        ) : (
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
            {/* uses .map to render all 16 movies with the id*/}
            {movies.map((movie, index) => (
              <MovieCard 
                movie={movie} 
                key={movie._id}
                index={index}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
