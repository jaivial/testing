import { Title, Text } from "@heroui/react";

interface LandingHeroProps {
  title: string;
  subtitle: string;
}

export function LandingHero({ title, subtitle }: LandingHeroProps) {
  return (
    <div className="text-center py-20">
      <Title size="2xl" className="mb-4">{title}</Title>
      <Text size="lg">{subtitle}</Text>
    </div>
  );
} 