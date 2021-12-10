import React from 'react';

function MedicalTreatmentPanel() {
  const [treatId, setTreatId] = React.useState('');

  const [treatCourseId, setTreatCourseId] = React.useState('');

  const [type, setType] = React.useState('');

  const [category, setCategory] = React.useState('');

  const [name, setName] = React.useState('');

  const [startDate, setStartDate] = React.useState('');

  return (
    <div>
      <input
        type="text"
        value={treatId}
        onChange={(event) => setTreatId(event.target.value)}
      />

      <input
        type="text"
        value={treatCourseId}
        onChange={(event) => setTreatCourseId(event.target.value)}
      />

      <input
        type="text"
        value={type}
        onChange={(event) => setType(event.target.value)}
      />

      <input
        type="text"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      />

      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <input
        type="date"
        value={startDate}
        onChange={(event) => setStartDate(event.target.value)}
      />
    </div>
  );
}

export default MedicalTreatmentPanel;
