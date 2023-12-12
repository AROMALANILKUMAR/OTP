import React, { useState } from 'react';
import Axios from 'axios';

function Mobile() {
  const [number, setNumber] = useState('');
  const [otp, setOtp] = useState('');

  const handleClick = () => {
    Axios.post(`http://localhost:8000/mobile`, { number })
      .then((res) => {
        console.log('Axios Response (handleClick):', res);
      })
      .catch((error) => {
        console.error('Axios Error (handleClick):', error);
      });
  };
  const onClick = () => {
    Axios.post(`http://localhost:8000/otp`, { otp: otp })
      .then((res) => {
        console.log('Axios Response (onClick):', res);
      })
      .catch((error) => {
        console.error('Axios Error (onClick):', error);
      });
  };
  

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  const onChange = (event) => {
    setOtp(event.target.value);
  };

  console.log('number', number);

  return (
    <div>
      <input type="number" onChange={handleChange} value={number} />
      <button type="button" onClick={handleClick}>
        submit number
      </button>
      <input type="number" onChange={onChange} value={otp} />
      <button type="button" onClick={onClick}>
        submit otp
      </button>
    </div>
  );
}

export default Mobile;
