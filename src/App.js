import logo from './logo.svg';
import './App.css';
import React from 'react';
// import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reloTesttngad.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
//
// export default App;

// const App = () => {
//   return (
//     <div className="landing-page">
//       <div className="hero-section">
//         <h1>Welcome to Real Estate App</h1>
//         <p>Find your dream home with our easy-to-use platform</p>
//         <Link to="/properties" className="btn btn-primary">View Properties</Link>
//       </div>
//       <div className="features-section">
//         <div className="feature">
//           <i className="fas fa-search fa-3x"></i>
//           <h3>Advanced Property Search</h3>
//           <p>Find properties that match your specific criteria, such as location, price range, and features.</p>
//         </div>
//         <div className="feature">
//           <i className="fas fa-building fa-3x"></i>
//           <h3>Property Listings</h3>
//           <p>Browse a wide selection of properties, including houses, apartments, and commercial buildings.</p>
//         </div>
//         <div className="feature">
//           <i className="fas fa-map-marker fa-3x"></i>
//           <h3>Interactive Maps</h3>
//           <p>Explore the surrounding area of your property using our interactive maps and satellite imagery.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

export default App;
