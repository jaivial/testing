import { SignupForm } from '../ui/SignupForm'
import { useSignup } from '../context/SignupProvider'

export function SignupFeature() {
  const signupHooks = useSignup()
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Sign up as a Trainer
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Create your account to start managing your athletes
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <SignupForm {...signupHooks} />
        </div>
      </div>
    </div>
  )
} 