# Testing and Development Rules

## Project Structure Rules

### Component Types
1. **Page Components** (Route Files)
   - ✅ Only SSR props passing
   - ✅ Page context provider imports
   - ✅ Feature component imports inside context
   - ❌ No useState
   - ❌ No useEffect
   - ❌ No direct HTML
   - ❌ No UI components declarations

2. **Feature Components**
   - ✅ Call variables from page.hooks.ts
   - ✅ Call variables from context hooks
   - ✅ Return only UI Components
   - ❌ No nested feature components
   - ❌ No useState declarations
   - ❌ No useEffect declarations
   - ❌ Minimal HTML usage
   
3. **UI Components**
   - ✅ Pure render components
   - ✅ Only HTML/UI elements
   - ✅ Props usage only
   - ❌ No useState
   - ❌ No useEffect
   - ❌ No custom hooks
   - ❌ No function declarations
   - ❌ No variable declarations

## State Management Rules
- All states must be in `page.hooks.ts`
- All functions must be in `page.hooks.ts`
- All effects must be in `page.hooks.ts`

## Database Rules
- Use local MongoDB
- No Mongoose
- All MongoDB functions must be in `page.server.ts`
- Database schema changes must be documented in `dbschema.md`
- Always read `dbschema.md` before database operations

## Documentation Rules
1. **Error Logging**
   - Document all errors in `errorlogs.md`
   - Include error description
   - Include solution
   - Include prevention steps

2. **Planning**
   - Create detailed steps in `planguide.md`
   - Break down queries into smallest possible steps
   - Include checkable options
   - Mark steps as complete when done
   - Request next step after completion

## Tech Stack Compliance
- Next.js 15
- Tailwind CSS
- Node.js
- MongoDB
- HeroUI Components
- Mobile-first responsive design
- Server-side rendering

## File Naming Convention
pages/
├── [page]/
│ ├── page.tsx # Page component
│ ├── page.hooks.ts # Custom hooks
│ ├── page.server.ts # Server functions
│ └── components/
│ ├── features/ # Feature components
│ └── ui/ # UI components
docs/
├── dbschema.md # Database schema
├── errorlogs.md # Error documentation
├── planguide.md # Step-by-step guide
└── testingrules.md # These rules

## Component Example Structure

typescript
// page.tsx (Page Component)
export default async function Page() {
const serverData = await getServerData();
return (
<PageContextProvider serverData={serverData}>
<FeatureComponent />
</PageContextProvider>
);
}

// features/FeatureComponent.tsx
export function FeatureComponent() {
const { data } = usePageHook();
return <UIComponent data={data} />;
}

// ui/UIComponent.tsx
export function UIComponent({ data }) {
return <div className="tailwind-classes">{data}</div>;
}


## Testing Checklist
- [ ] Verify component type compliance
- [ ] Check for proper hook usage
- [ ] Validate database operations
- [ ] Review mobile responsiveness
- [ ] Confirm SSR implementation
- [ ] Test CRUD operations
- [ ] Verify documentation updates