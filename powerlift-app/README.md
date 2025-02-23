# PowerLift App

A training planner for powerlifting trainers and athletes. Built with Next.js, MongoDB, and HeroUI.

## Features

- Trainer account creation and management
- Athlete invitation system
- Workout planning and tracking
- RPE (Rate of Perceived Exertion) tracking
- Mobile-friendly interface with Capacitor

## Prerequisites

- Node.js 18+
- MongoDB running locally
- npm or yarn package manager

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file with the following variables:
   ```
   MONGODB_URI=mongodb://localhost:27017/powerlift
   JWT_SECRET=your-secret-key-here
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Mobile App Setup

1. Install Capacitor:
   ```bash
   npm install @capacitor/core @capacitor/cli
   ```
2. Initialize Capacitor:
   ```bash
   npx cap init
   ```
3. Add platforms:
   ```bash
   npx cap add android
   npx cap add ios
   ```
4. Build the web app:
   ```bash
   npm run build
   ```
5. Sync with Capacitor:
   ```bash
   npx cap sync
   ```

## Project Structure

- `/app` - Next.js app router pages and API routes
- `/components` - React components (features and UI)
- `/hooks` - Custom React hooks
- `/lib` - Utility functions and configurations
- `/server-actions` - Server-side actions
- `/docs` - Documentation files

## Development

- Follow the project rules in `docs/projectrules.md`
- Use HeroUI components for UI elements
- Keep database schema updated in `docs/dbschema.md`
- Document errors in `docs/errorlogs.md`

## License

MIT
