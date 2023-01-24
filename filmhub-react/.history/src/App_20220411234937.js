import axios from "axios";
import { useEffect } from "react";


function App() {
  const fetch = () => {
    axios.get('http://www.omdbapi.com/?apikey=c4183736')
  .then((response)=>console.log(response.data));
  }
    useEffect(()=>{fetch()},[])
  return (
    <div >
      works
    </div>
  );
}

export default App;
