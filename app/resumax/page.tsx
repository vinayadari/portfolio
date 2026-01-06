import ResumaxHero from "@/components/resumax/ResumaxHero";
import ResumaxHeader from "@/components/resumax/ResumaxHeader";
import ResumaxAnalysis from "@/components/resumax/ResumaxAnalysis";
import ResumaxCompanies from "@/components/resumax/ResumaxCompanies";
import ResumaxTemplates from "@/components/resumax/ResumaxTemplates";
import ResumaxPricing from "@/components/resumax/ResumaxPricing";
import ResumaxFooter from "@/components/resumax/ResumaxFooter";

export default function ResumaxPage() {
  return (
    <main className="min-h-screen bg-white">
      <ResumaxHeader />
      <ResumaxHero />
      <ResumaxAnalysis />
      <ResumaxCompanies />
      <ResumaxTemplates />
      <ResumaxPricing />
      <ResumaxFooter />
    </main>
  );
}
