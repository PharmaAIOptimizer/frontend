import React, { useState } from 'react';

function CsvToBase64() {
  const [base64, setBase64] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64String = reader.result
          .replace('data:', '')
          .replace(/^.+,/, '');
        setBase64(base64String);
      };
      reader.onerror = (error) => {
        console.log('Error: ', error);
      };
    }
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <p>Base64 of the CSV file:</p>
      <textarea value={base64} readOnly style={{ width: '100%', height: '100px' }} />
    </div>
  );
}

export default CsvToBase64;