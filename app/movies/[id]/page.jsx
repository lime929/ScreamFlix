"use client";
import { useRouter } from "next/navigation";
import { use } from "react";  
import Image from "next/image";
import movies from "@/horror-movies.json";

export default function MoviePage({ params }) {
  const router = useRouter();
  const { id } = use(params);

  const movie = movies.find((m) => m._id === id);

  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-950 via-[#0f0e0e] to-zinc-950 text-zinc-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* when clicked routes to movies page */}
        <button 
          onClick={() => router.replace('/movies')}
          className="group inline-flex items-center gap-3 mb-12 bg-zinc-900/50 hover:bg-zinc-800/70 text-zinc-200 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 border border-zinc-700/50 hover:border-zinc-500 hover:shadow-xl hover:shadow-zinc-900/50"
        >
          Back to Movies
        </button>

        {/* Movie img & rating in corner */}
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <div className="relative w-full aspect-[2/3] rounded-3xl overflow-hidden ring-2 ring-zinc-800/50 shadow-2xl">
            <Image
              src={movie.images[0]}
              alt={movie.name}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500 hover:brightness-110"
              priority
            />
            <div className="absolute top-6 right-6">
              <span className="px-4 py-2 bg-red-600/90 text-white text-xs font-bold rounded-full backdrop-blur-sm shadow-lg">
                {movie.rating}
              </span>
            </div>
          </div>

          {/* Movie Details */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-zinc-300 bg-clip-text text-transparent drop-shadow-2xl">
                {movie.name}
              </h1>
              <p className="text-2xl text-zinc-400 mb-2">
                {movie.year} • {movie.runtimeMinutes} minutes
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {/* cycles through genre words */}
                {movie.genres.map((genre) => (
                  <span
                    key={genre}
                    className="px-4 py-2 bg-zinc-800/50 hover:bg-zinc-700 text-zinc-300 text-sm font-semibold rounded-full transition-all cursor-pointer group-hover:scale-105"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-zinc-200 border-b border-zinc-800 pb-4">
                Synopsis
              </h3>
              <p className="text-lg leading-relaxed text-zinc-300">
                {movie.description}
              </p>
            </div>

            {/* Simple Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-zinc-900/50 rounded-2xl backdrop-blur-sm border border-zinc-800/50">
              <div>
                <p className="text-zinc-400 mb-1 font-semibold uppercase tracking-wider text-xs">Language</p>
                <p className="text-xl text-zinc-200 font-semibold">{movie.language}</p>
              </div>
              <div>
                <p className="text-zinc-400 mb-1 font-semibold uppercase tracking-wider text-xs">Country</p>
                <p className="text-xl text-zinc-200 font-semibold">{movie.country}</p>
              </div>
              <div>
                <p className="text-zinc-400 mb-1 font-semibold uppercase tracking-wider text-xs">Director</p>
                <p className="text-xl text-zinc-200 font-semibold">{movie.details.director}</p>
              </div>
              <div>
                <p className="text-zinc-400 mb-1 font-semibold uppercase tracking-wider text-xs">Cast</p>
                <p className="text-xl text-zinc-200 font-semibold">{movie.details.mainCast}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
