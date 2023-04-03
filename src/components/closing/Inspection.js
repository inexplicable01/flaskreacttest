import React, { useState } from 'react';

const Inspection = () => {
  const [inspectorName, setInspectorName] = useState('');
  const [inspectionDate, setInspectionDate] = useState('');
  const [inspectionReport, setInspectionReport] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the form data to your backend or dispatch an action here
    console.log('Inspection:', { inspectorName, inspectionDate, inspectionReport });
  };

  return (
    <div>
      <h2>Property Inspection</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="inspectorName">Inspector Name:</label>
          <input
            type="text"
            id="inspectorName"
            value={inspectorName}
            onChange={(e) => setInspectorName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="inspectionDate">Inspection Date:</label>
          <input
            type="date"
            id="inspectionDate"
            value={inspectionDate}
            onChange={(e) => setInspectionDate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="inspectionReport">Inspection Report:</label>
          <input
            type="file"
            id="inspectionReport"
            onChange={(e) => setInspectionReport(e.target.files[0])}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Inspection;

