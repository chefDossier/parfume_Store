import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import DiagnosticQuiz from "@/components/DiagnosticQuiz";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Étape 1 : Section d'immersion visuelle */}
      <Hero />
      
      {/* Étape 2 : Galerie épurée des collections */}
      <ProductGrid />
      
      {/* Étape 3 : Module interactif personnalisé */}
      <DiagnosticQuiz />
    </div>
  );
}