"use client";
import { useState } from "react";
import RecommendationList from "@/app/components/RecommendationList.jsx";  
import RecommendationForm from  "@/app/components/RecommendationForm.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";

export default function AddRecommendationsPage() {
  const [recommendations, setRecommendations] = useState([]);

  function addRecommendationHandler(recData) {
    setRecommendations((existingRecommendations) => [recData, ...existingRecommendations]);
  }

  return (
    <>
    <div className="bg-[#0f0e0e]/60">
    <Hero />
      <div className="right-[-5px] relative mx-auto h-[25px] w-[1103px] bg-[#090907] rounded-b-md" />
     
      <main className="mt-2 mb-20 w-[1000px] max-w-[calc(100vw-2rem)] mx-auto bg-[#CCC]/40 backdrop-blur-sm px-8 py-6 rounded-2xl shadow-lg shadow-[#468a9a]/20">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] items-start gap-10 ">
          <h1 className="border-l-2 border-[#468a9a] pl-5 text-4xl md:text-5xl font-black leading-[1.05] text-[#eeeeee] drop-shadow-2xl tracking-tight text-left md:pt-8 uppercase">Add your favorite movie to our list!</h1>
          <RecommendationForm onAddRecommendation={addRecommendationHandler} />
        </div>
        <RecommendationList recommendations={recommendations} />
      </main>
      <About/>
      </div>
    </>
  );
}
 