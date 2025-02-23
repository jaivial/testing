import { LandingHero } from "../ui/LandingHero";
import { AuthButtons } from "../ui/AuthButtons";

interface LandingFeatureProps {
  data: {
    title: string;
    subtitle: string;
  };
}

export function LandingFeature({ data }: LandingFeatureProps) {
  return (
    <div>
      <LandingHero title={data.title} subtitle={data.subtitle} />
      <AuthButtons />
    </div>
  );
} 