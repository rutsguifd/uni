import axios from "axios";
import { useEffect } from "react";
import Header from "./components/Header";


function App() {
  const fetch = () => {
    axios.get('http://www.omdbapi.com/?apikey=c4183736&s=superman&page=2')
  .then((response)=>console.log(response.data));
  }
    useEffect(()=>{fetch()},[])
  return (
    <div >
    <Header/>
      works
    </div>
  );
}

export default App;
