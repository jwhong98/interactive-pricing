import './App.css';
import PriceCard from './Components/PriceCard';

function App() {
  return (
    <div className="page-container">
      <div className="top">
        <div className="text-wrapper">
          <h1 className="title">Simple, traffic-based pricing</h1>
          <p className="subtitle">Sign-up for our 30-day trial.</p>
          <p className="subtitle">No credit card required</p>
        </div>
      </div>
      <PriceCard />
    </div>
  );
}

export default App;
