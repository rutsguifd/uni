import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import AppRouter from "./router/AppRouter";
import './styles/App.scss'

function App() {
  return (
    <div className="App">
    <Header/>
      <AppRouter/>
    </div>
  );
}

export default App;
