import { HomeHero } from '../ui/HomeHero'
import { HomeNavigation } from '../ui/HomeNavigation'

export function HomeFeature() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HomeNavigation />
      <HomeHero />
    </div>
  )
} 