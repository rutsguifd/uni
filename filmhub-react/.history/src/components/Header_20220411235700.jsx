
import React, { useState } from 'react'

const Header = () => {
    const [searchQuery, setSearchQuery] = useState("")
    return (
    <div>
    <input value={searchQuery} onChange={(e)=>{setSearchQuery(e.target.value); console.log(searchQuery)}}/>
    </div>
  )
}

export default Header