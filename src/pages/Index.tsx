import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import JourneyOverview from "@/components/JourneyOverview";
import PhaseOne from "@/components/PhaseOne";
import Challenges from "@/components/Challenges";
import DataProcessing from "@/components/DataProcessing";
import StudentGroups from "@/components/StudentGroups";
import Stories from "@/components/Stories";
import Guidelines from "@/components/Guidelines";
import Conclusion from "@/components/Conclusion";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Introduction />
      <JourneyOverview />
      <PhaseOne />
      <Challenges />
      <DataProcessing />
      <StudentGroups />
      <Stories />
      <Guidelines />
      <Conclusion />
    </div>
  );
};

export default Index;
