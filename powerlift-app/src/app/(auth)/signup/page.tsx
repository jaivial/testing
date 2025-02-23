import { SignupFeature } from '@/components/auth/features/SignupFeature'
import { SignupProvider } from '@/components/auth/context/SignupProvider'

export default async function SignupPage() {
  return (
    <SignupProvider>
      <SignupFeature />
    </SignupProvider>
  )
} 