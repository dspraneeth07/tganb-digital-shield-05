
import HeroSection from '../components/HeroSection';
import AnnouncementTicker from '../components/AnnouncementTicker';
import AboutTGANB from '../components/AboutTGANB';
import TRisingAIHighlight from '../components/TRisingAIHighlight';
import DirectorMessage from '../components/DirectorMessage';
import InitiativesHighlight from '../components/InitiativesHighlight';
import InitiativesSlider from '../components/InitiativesSlider';
import NewsEvents from '../components/NewsEvents';
import AnimatedMetrics from '../components/AnimatedMetrics';
import AntiDrugSoldierSection from '../components/AntiDrugSoldierSection';
import TrainingsSlider from '../components/TrainingsSlider';
import AnonymousReportSection from '../components/AnonymousReportSection';
import StatisticsSection from '../components/StatisticsSection';
import StationsInfoSection from '../components/StationsInfoSection';
import RehabilitationSection from '../components/RehabilitationSection';
import TGANBStructureSection from '../components/TGANBStructureSection';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AnnouncementTicker />
      <AboutTGANB />
      <TRisingAIHighlight />
      <DirectorMessage />
      <InitiativesHighlight />
      <NewsEvents />
      <AnimatedMetrics />
      <AntiDrugSoldierSection />
      <TrainingsSlider />
      <AnonymousReportSection />
      <StatisticsSection />
      <StationsInfoSection />
      <RehabilitationSection />
      <TGANBStructureSection />
      <Footer />
    </div>
  );
};

export default Index;
