import Link from 'next/link';
import AboutHero from '../../components/AboutHero';

export const metadata = {
  title: 'About | ScreamFlix',
  description: 'Learn how ScreamFlix helps horror fans discover, discuss, and recommend great movies.',
};

const faqs = [
  {
    question: 'What is ScreamFlix?',
    answer: 'ScreamFlix is a focused home for horror cinema. Browse a hand-picked collection, explore movies by decade, read reviews, and share your own recommendations with fellow fans.',
  },
  {
    question: 'How do I recommend a movie?',
    answer: 'Use the recommendation form on the home page. Add the movie title, your name, and a short explanation of why other horror fans should watch it. Your recommendation appears in the community list after you submit it.',
  },
  {
    question: 'What kinds of horror movies are featured?',
    answer: 'The collection moves across slashers, supernatural horror, psychological thrillers, monsters, cult classics, and unsettling modern films. The goal is variety, from familiar favorites to films you may have missed.',
  },
  {
    question: 'Can I browse by year?',
    answer: 'Yes. Decade Picks gives each era its own doorway, making it easier to compare different styles of horror and find a movie that fits your mood.',
  },
  {
    question: 'Where does the movie information come from?',
    answer: 'Movie details and reference information are gathered from IMDb. ScreamFlix adds its own curation, writing, and community recommendations on top of those references.',
  },
  {
    question: 'Is ScreamFlix only for horror fanatics?',
    answer: 'Not at all. Whether you are discovering your first classic or already know every slash-and-stalk favorite, the collection is designed to give you a useful place to start your next watch.',
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0f0e0e]/90 px-4 pb-24 text-[#eeeeee] md:px-8">
      <div className="mx-auto max-w-6xl">
        <AboutHero />

        <section className="grid gap-12 border-b border-[#468a9a]/25 pb-20 md:grid-cols-[1.1fr_0.9fr] md:gap-20">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#79b9c4]">A place for film people</p>
            <h2 className="max-w-xl text-3xl font-black leading-tight md:text-5xl">Discover the stories behind the screams.</h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-[#eeeeee]/75 md:text-lg">
            <p>ScreamFlix brings the horror shelf into one shared space. It is built for the moment when the credits roll and you immediately need to talk about what you just watched.</p>
            <p>Start with the essential collection, follow a decade trail, or trust another fan&apos;s recommendation. Every path is an invitation to look a little deeper into horror cinema.</p>
          </div>
        </section>

        <section className="border-b border-[#468a9a]/25 py-20">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#79b9c4]">Start exploring</p>
              <h2 className="text-3xl font-black md:text-4xl">Choose your way in.</h2>
            </div>
            <Link href="/movies" className="w-fit border border-[#79b9c4]/70 px-5 py-3 text-sm font-bold uppercase tracking-wider text-[#b9d8dc] transition-colors hover:bg-[#541212] hover:text-white">
              Browse all movies
            </Link>
          </div>
          <div className="grid gap-px overflow-hidden border border-[#eeeeee]/20 bg-[#eeeeee]/20 md:grid-cols-3">
            <Link href="/movies" className="bg-[#0f0e0e] p-7 transition-colors hover:bg-[#541212]/70">
              <span className="text-sm font-bold text-[#79b9c4]">01</span>
              <h3 className="mt-12 text-xl font-bold">Essential horror</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#eeeeee]/60">A concise collection of films worth making room for.</p>
            </Link>
            <Link href="/movies/decades" className="bg-[#0f0e0e] p-7 transition-colors hover:bg-[#541212]/70">
              <span className="text-sm font-bold text-[#79b9c4]">02</span>
              <h3 className="mt-12 text-xl font-bold">Decade Picks</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#eeeeee]/60">Travel through changing eras, fears, and filmmaking styles.</p>
            </Link>
            <Link href="/movies/reviews" className="bg-[#0f0e0e] p-7 transition-colors hover:bg-[#541212]/70">
              <span className="text-sm font-bold text-[#79b9c4]">03</span>
              <h3 className="mt-12 text-xl font-bold">Reviews</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#eeeeee]/60">See what makes a film linger after the lights come back on.</p>
            </Link>
          </div>
        </section>

        <section className="mx-auto max-w-4xl py-20">
          <div className="mb-10">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#79b9c4]">Questions, answered</p>
            <h2 className="text-3xl font-black md:text-4xl">ScreamFlix FAQ</h2>
          </div>
          <div className="divide-y divide-[#eeeeee]/20 border-y border-[#eeeeee]/20">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-bold text-[#eeeeee] marker:hidden">
                  {faq.question}
                  <span className="text-2xl font-normal text-[#79b9c4] transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="max-w-3xl pt-4 leading-relaxed text-[#eeeeee]/65">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="border-t border-[#468a9a]/25 pt-12 text-center">
          <h2 className="text-2xl font-black md:text-3xl">Have a film that deserves a scream?</h2>
          <p className="mx-auto mt-3 max-w-xl text-[#eeeeee]/65">Put your recommendation into the collection and help another fan find their next favorite.</p>
          <Link href="/" className="mt-7 inline-block bg-[#b9d8dc] px-6 py-3 text-sm font-bold uppercase tracking-wider text-[#0f0e0e] transition-colors hover:bg-[#541212] hover:text-white">
            Share a recommendation
          </Link>
        </section>
      </div>
    </main>
  );
}
