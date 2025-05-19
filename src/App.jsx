import { AllRoutes } from './routes/AllRoutes';
import { Footer, Header } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <AllRoutes></AllRoutes>
      <Footer></Footer>
    </div>
  );
}

export default App;
