import { createContext, useContext } from 'react'
import { useSignupHooks } from '@/hooks/auth/signup.hooks'

type SignupContextType = ReturnType<typeof useSignupHooks>

const SignupContext = createContext<SignupContextType | undefined>(undefined)

export function SignupProvider({ children }: { children: React.ReactNode }) {
  const signupHooks = useSignupHooks()

  return (
    <SignupContext.Provider value={signupHooks}>
      {children}
    </SignupContext.Provider>
  )
}

export function useSignup() {
  const context = useContext(SignupContext)
  if (!context) {
    throw new Error('useSignup must be used within a SignupProvider')
  }
  return context
} 