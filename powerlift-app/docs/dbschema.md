# Database Schema Documentation

## Collections

### Users
```typescript
{
  _id: ObjectId,
  email: string,
  password: string, // hashed
  role: 'trainer' | 'athlete',
  name: string,
  createdAt: Date,
  updatedAt: Date,
  trainerId?: ObjectId, // Reference to trainer if user is an athlete
  invitationToken?: string // For athlete registration
}
```

### Workouts
```typescript
{
  _id: ObjectId,
  trainerId: ObjectId,
  athleteId: ObjectId,
  date: Date,
  exercises: [
    {
      name: string,
      plannedSets: [
        {
          reps: number,
          weight: number,
          rpe: number
        }
      ],
      completedSets: [
        {
          reps: number,
          weight: number,
          rpe: number,
          completedAt: Date
        }
      ]
    }
  ],
  status: 'planned' | 'in_progress' | 'completed',
  notes: string,
  createdAt: Date,
  updatedAt: Date
}
```

## Indexes

### Users Collection
- `email`: Unique index
- `invitationToken`: Unique index (sparse)

### Workouts Collection
- `athleteId_date`: Compound index
- `trainerId`: Index
- `date`: Index

## Relationships
- Athletes are linked to their trainer through the `trainerId` field
- Workouts are linked to both trainer and athlete through their respective ID fields

## Notes
- All passwords are hashed using bcrypt
- Invitation tokens are generated for athlete registration
- Dates are stored in UTC
- RPE values are stored as numbers from 0 to 10 