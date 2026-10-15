import './globals.css';
import Footer from '../app/components/Footer';
import NavBar from '../app/components/NavBar';

export const metadata = {
  title: "ScreamFlix",
  description: "A community-driven platform for sharing and discovering movie recommendations, reviews, and discussions. Join us to explore a wide range of films, from cult classics to hidden gems, and connect with fellow movie enthusiasts. Whether you're into horror, thriller, suspense, slasher, supernatural, psychological, cult classics, gore, monster movies, vampires, zombies, ghosts, or serial killers, ScreamFlix is your go-to destination for all things cinema!",
  keywords: ["movies", "recommendations", "reviews", "horror", "thriller", "suspense", "slasher", "supernatural", "psychological", "cult classics", "gore", "monster movies", "vampires", "zombies", "ghosts", "serial killers"],
};

export default function MainLayout({ children }) {
  return (
    <html lang="en">
      <body>      
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}``