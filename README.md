# Frontend Interview Challenge


## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser at `http://localhost:5173`

## Your Task

Build a movie browsing application with the following features:

### Core Requirements (Must Complete)

1. **Movie Display**
   - Display all movies from the provided data in a responsive grid layout
   - Each movie should be displayed in a card format

2. **MovieCard Component**
   - Create a reusable `MovieCard` component
   - Display: movie poster, title, and year
   - The component should be properly typed with TypeScript

3. **Interactive Features**
   - Add hover effects to the movie cards
   - Cards should be visually responsive to user interaction

4. **Search Functionality**
   - Implement a search bar to filter movies by title
   - Search should be case-insensitive
   - Results should update as the user types

5. **Sorting**
   - Add sorting options (dropdown or buttons)
   - Sort by: Year (newest/oldest), Title (A-Z/Z-A)

### Bonus Points (Optional)

- **Movie Details**: Click on a movie to show more details in a modal or sidebar
- **Favorites**: Add ability to mark movies as favorites (use local state)
- **Animations**: Add smooth transitions when filtering/sorting
- **Loading States**: Show loading states when data changes
- **Error Handling**: Handle edge cases gracefully
- **Responsive Design**: Ensure the app looks great on mobile devices
- **Performance**: Optimize rendering with React.memo, useMemo, etc.

## Available Data

The movie data is already provided in `src/data.ts`. Each movie object has:
- `id`: unique identifier
- `title`: movie title
- `year`: release year
- `poster_url`: URL to the movie poster image

## Technical Requirements

- Use TypeScript for type safety
- Create reusable components
- Follow React best practices
- Write clean, readable code
- Use modern React features (hooks, functional components)

## Evaluation Criteria

We will evaluate your solution based on:
- **Functionality**: Does it meet all requirements?
- **Code Quality**: Is the code clean, organized, and maintainable?
- **TypeScript Usage**: Proper typing and type safety
- **React Best Practices**: Component structure, state management, performance
- **UI/UX**: Is the interface intuitive and visually appealing?
- **Problem Solving**: How you approach and solve the requirements

## Time Expectation

This challenge is designed to be completed in 60-90 minutes. Focus on:
1. Meeting the core requirements first
2. Writing clean, working code
3. Adding bonus features if time permits

## Tips

- Start with the basic structure and components
- Get the core functionality working before styling
- Use the browser dev tools to debug
- Don't over-engineer - simple, clean solutions are preferred
- Ask questions if requirements are unclear

## Submission

When you're done:
1. Ensure all your code is saved
2. Test that the application runs without errors
3. Be prepared to walk through your code and explain your decisions

Good luck! We're excited to see your solution.
