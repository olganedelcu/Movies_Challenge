import { movies } from './data'
import './index.css'

function App() {
  return (
    <div className="app">
      
      {/* TODO: Implement the movie list display here */}
      <div className="instructions">
        <h2>Movie Challenge</h2>
        <p>Your task is to build a movie browsing interface using the provided movie data.</p>
        
        <h3>Requirements:</h3>
        <ul>
          <li>Display all movies: name, title, picture</li>
          <li>Add some responsive grid to it, so we get some style</li>
          <li>Create a MovieCard component that shows the movie poster, title, and year</li>
          <li>Add hover effects to the movie cards</li>
          <li>Implement a search/filter functionality to find movies by title</li>
          <li>Add sorting options (by year, by title)</li>
        </ul>

        <h3>Bonus Points:</h3>
        <ul>
          <li>Add a detailed view when clicking on a movie</li>
          <li>Implement favorites functionality</li>
          <li>Add smooth animations/transitions</li>
        </ul>

        <h3>Available Data:</h3>
        <pre>{JSON.stringify(movies[0], null, 2)}</pre>
        
        <h3>Result:</h3>
        <img src="/DEMO.png" alt="Demo" style={{ maxWidth: '400px', marginTop: '20px', borderRadius: '12px', display: 'block', margin: '20px auto 0' }} />
      </div>
    </div>
  )
}

export default App
