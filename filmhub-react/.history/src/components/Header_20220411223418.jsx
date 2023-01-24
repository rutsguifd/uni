import axios from 'axios'
import React, { useEffect } from 'react'

const Header = () => {
    const fetch = () => axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=c4183736');
    useEffect(()=>{console.log(fetch())},[])
    return (
    <div>Header</div>
  )
}

export default Header