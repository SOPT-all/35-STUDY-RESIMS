import React, { useState } from 'react';

const FilterList = ({ items }) => {
  const [query, setQuery] = useState('');

  const filteredItems = items.filter((memberObj) =>
    memberObj.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h1>Member List</h1>
      <input
        placeholder='Search...'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label='Search Input'
      />
      <ul>
        {filteredItems.length > 0 ? (
          filteredItems.map((member, idx) => <li key={idx}>{member.name}</li>)
        ) : (
          <p>No items found</p>
        )}
      </ul>
    </div>
  );
};

export default FilterList;
