import React, { useState } from "react";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div>
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
