import { Button, Input } from '@heroui/react'

interface SignupFormProps {
  form: {
    name: string
    email: string
    password: string
    confirmPassword: string
  }
  errors: Partial<{
    name: string
    email: string
    password: string
    confirmPassword: string
  }>
  isLoading: boolean
  handleChange: (field: string) => (value: string) => void
  handleSubmit: () => Promise<void>
}

export function SignupForm({
  form,
  errors,
  isLoading,
  handleChange,
  handleSubmit
}: SignupFormProps) {
  return (
    <form onSubmit={(e) => { e.preventDefault(); handleSubmit() }} className="space-y-6">
      <div>
        <Input
          label="Name"
          placeholder="Enter your name"
          value={form.name}
          onValueChange={handleChange('name')}
          errorMessage={errors.name}
          isRequired
        />
      </div>

      <div>
        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
          value={form.email}
          onValueChange={handleChange('email')}
          errorMessage={errors.email}
          isRequired
        />
      </div>

      <div>
        <Input
          label="Password"
          type="password"
          placeholder="Create a password"
          value={form.password}
          onValueChange={handleChange('password')}
          errorMessage={errors.password}
          isRequired
        />
      </div>

      <div>
        <Input
          label="Confirm Password"
          type="password"
          placeholder="Confirm your password"
          value={form.confirmPassword}
          onValueChange={handleChange('confirmPassword')}
          errorMessage={errors.confirmPassword}
          isRequired
        />
      </div>

      <div>
        <Button
          type="submit"
          variant="solid"
          size="lg"
          isLoading={isLoading}
          className="w-full"
        >
          Sign Up
        </Button>
      </div>
    </form>
  )
} 