import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface SignupForm {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export function useSignupHooks() {
  const router = useRouter()
  const [form, setForm] = useState<SignupForm>({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [errors, setErrors] = useState<Partial<SignupForm>>({})
  const [isLoading, setIsLoading] = useState(false)

  const validateForm = () => {
    const newErrors: Partial<SignupForm> = {}
    
    if (!form.name) newErrors.name = 'Name is required'
    if (!form.email) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Invalid email format'
    }
    
    if (!form.password) newErrors.password = 'Password is required'
    else if (form.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters'
    }
    
    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async () => {
    if (!validateForm()) return

    setIsLoading(true)
    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
          role: 'trainer'
        })
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.message || 'Signup failed')
      }

      router.push('/login?signup=success')
    } catch (error) {
      setErrors({ email: error instanceof Error ? error.message : 'Signup failed' })
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (field: keyof SignupForm) => (value: string) => {
    setForm(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  return {
    form,
    errors,
    isLoading,
    handleChange,
    handleSubmit
  }
} 