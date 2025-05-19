import { AllRoutes } from './routes/AllRoutes';
import { Footer, Header } from './components';
import './App.css';

function App() {
  return (
    <div className="App dark:bg-slate-800 min-h-screen">
      <Header></Header>
      <AllRoutes></AllRoutes>
      <Footer></Footer>
    </div>
  );
}

export default App;
