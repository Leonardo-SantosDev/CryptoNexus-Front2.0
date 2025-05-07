import { Navbar } from "../../components/Navbar";
import { Hero } from "../../components/Hero";
import { Banner } from "../../components/Banner";
import { Comunidade } from "../../components/Comunidade";
import AppSection from "../../components/AppSection";
import { Vantagens } from "../../components/Vantagens";
import { ImpactoSocial } from "../../components/ImpactoSocial";
import { Recursos } from "../../components/Recursos";
import { Footer } from "../../components/Footer";
import TopCriptos from "../../components/TopCryptos";
import { ExplorarNexus } from "../../components/ExplorarNexus";
// import CryptoSimulation from "../../components/CryptoSimulation";
import EducacaoFinanceira from "../../components/EducacaoFinanceira";
import GlossarioCripto from "../../components/GlossarioCripto";
// import QuizInterativo from "../../components/QuizInterativo";
// import AlertasMercado from "../../components/AlertasMercado";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Banner />
      <TopCriptos/>
      <GlossarioCripto/>
      {/* <CryptoSimulation/> */}
      {/* <QuizInterativo/> */}
      {/* <AlertasMercado/> */}
      <EducacaoFinanceira />
      <Comunidade />
      <AppSection />
      <ExplorarNexus/>
      <Vantagens />
      <ImpactoSocial />
      <Recursos />
      <Footer />
    </div>
  );
}
