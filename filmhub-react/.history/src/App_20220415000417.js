import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import AppRouter from "./router/AppRouter";
import './styles/App.scss'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Header/>
      <AppRouter/>
    </div>
    </BrowserRouter>
  );
}

export default App;
