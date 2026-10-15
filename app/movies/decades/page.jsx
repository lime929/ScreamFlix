import DecadeSection from '../../components/DecadesSection.jsx';
import moviesData from '@/horror-movies.json';
import DecadesHeader from '../../components/DecadesHeader';

export const metadata = {
  title: 'Decades | ScreamFlix',
  description: 'Explore the evolution of horror cinema through the decades. Discover top picks from the 1980s, 2000s, and 2020s, and see how the genre has transformed over time.',
};

export default function DecadePicks() {
  const decades = [1980, 2000, 2020];  

  return (
    <main className="min-h-screen bg-[#0f0e0e]/90 py-16 px-4">
      <div className="max-w-7xl mx-auto">
       <DecadesHeader/>
        {/* cycles through top 3 movies from each decade using the Decade Section function */}
        {decades.map((decade) => (
          <DecadeSection 
            key={decade} 
            decade={decade} 
            movies={moviesData} 
          />
        ))}
      </div>
    </main>
  );
}
