import { Button } from '@heroui/react'
import Link from 'next/link'

export function HomeNavigation() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              PowerLift
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/login">
              <Button variant="bordered">Login</Button>
            </Link>
            <Link href="/signup">
              <Button variant="solid">Sign Up as Trainer</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 