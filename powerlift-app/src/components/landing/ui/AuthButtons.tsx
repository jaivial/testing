import { Button } from "@heroui/react";

export function AuthButtons() {
  return (
    <div className="flex justify-center gap-4">
      <Button 
        variant="primary" 
        href="/auth/trainer/signup"
      >
        Trainer Sign Up
      </Button>
      <Button 
        variant="secondary"
        href="/auth/login"
      >
        Login
      </Button>
    </div>
  );
} 