import React, { useState } from "react";
import "../styles/Header.css"

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className={header}>
      <form>
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Header;
