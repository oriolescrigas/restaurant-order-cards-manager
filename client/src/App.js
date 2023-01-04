import './App.css';

import Hero from './components/hero';
import Orders from './components/orders';

function App() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <Hero />
        </div>
      </div>

      <div className='row'>
        <Orders />
      </div>

    </div>
  );
}

export default App;
