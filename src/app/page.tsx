import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import DiagnosticQuiz from "@/components/DiagnosticQuiz";
import ReassuranceBar from "@/components/ReassurenceBar";
export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-amber-50">
      {/* Étape 1 : Section d'immersion visuelle */}
      <Hero />

      {/* Étape 2 : Bar de réassurance élégante et concise */}
      <ReassuranceBar />
      
      {/* Étape 3 : Galerie épurée des collections */}
      <ProductGrid />
      
      {/* Étape 4 : Module interactif personnalisé */}
      <DiagnosticQuiz />
      
    </div>
  );
}