import React, { useState } from 'react';

const Datepicker = () => {
  const [startDate, setStartDate] = useState('');
  const [time, setTime] = useState('');
  const handleDate = (e) => {
    setStartDate(e.target.value);
  };
  const handleTime = (e) => {
    setTime(e.target.value);
  };

  const OnFocus = (e) => {
    e.target.type = 'date';
  };

  const OnFocusTime = (e) => {
    e.target.type = 'time';
  };

  return (
    <div className="contact-form">
      <div className="header">Appointment Information</div>

      <div className="contact-form-labels">
        <input
          className="contact-form-input"
          name="appt-date"
          autoComplete="off"
          onFocus={OnFocus}
          placeholder="Preffered Date*"
          value={startDate}
          onChange={handleDate}
        />
      </div>

      <div className="contact-form-labels">
        <input
          className="contact-form-input"
          name="appt-time"
          autoComplete="off"
          onFocus={OnFocusTime}
          placeholder="Preffered Time* "
          value={time}
          onChange={handleTime}
          min="09:00"
          max="18:00"
          required
        />
      </div>
    </div>
  );
};

export default Datepicker;
