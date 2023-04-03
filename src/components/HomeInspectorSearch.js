import React, { useState } from "react";

function HomeInspectorSearch() {
  const [zipCode, setZipCode] = useState("");
  const [homeInspectors, setHomeInspectors] = useState([]);

  const handleZipCodeChange = (event) => {
    setZipCode(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`/api/homeInspectors?zipCode=${zipCode}`);
      const data = await response.json();

      setHomeInspectors(data.homeInspectors);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Zip Code:
          <input type="text" value={zipCode} onChange={handleZipCodeChange} />
        </label>
        <button type="submit">Search</button>
      </form>

      <ul>
        {homeInspectors.map((homeInspector) => (
          <li key={homeInspector.id}>
            {homeInspector.name}, {homeInspector.phone}, {homeInspector.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomeInspectorSearch;
