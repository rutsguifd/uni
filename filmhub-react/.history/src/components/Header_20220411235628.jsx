
import React, { useState } from 'react'

const Header = () => {
    const [searchQuery, setSearchQuery] = useState("")
    return (
    <div>
    <input value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}/>
    </div>
  )
}

export default Header