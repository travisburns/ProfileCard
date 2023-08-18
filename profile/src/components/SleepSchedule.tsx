import React, { useState, useEffect } from 'react';

type SleepStats = {
  time: string;
  hours: number;
  rejuvanted: boolean;
  mood: string;
  date: string;
  awakeTime: string;
};

const SleepSchedule = () => {
  const [sleepEntries, setSleepEntries] = useState<SleepStats[]>([]);
  const [newEntry, setNewEntry] = useState<SleepStats>({
    time: '',
    hours: 0,
    rejuvanted: false,
    mood: '',
    date: '',
    awakeTime: '',
  });

  useEffect(() => {
    const storedEntries = JSON.parse(localStorage.getItem('sleepEntries') || '[]') as SleepStats[];
    setSleepEntries(storedEntries);
  }, []);

  useEffect(() => {
    localStorage.setItem('sleepEntries', JSON.stringify(sleepEntries));
  }, [sleepEntries]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    const inputValue = type === 'checkbox' ? checked : value;

    setNewEntry((prevEntry) => ({
      ...prevEntry,
      [name]: inputValue,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSleepEntries((prevEntries) => [...prevEntries, newEntry]);
    setNewEntry({
      time: '',
      hours: 0,
      rejuvanted: false,
      mood: '',
      date: '',
      awakeTime: '',
    });
  };

  return (
    <div className='bg-purple-900 text-white'>
      <h1 className='text-[5rem]'>Sleep Schedule</h1>
      <form onSubmit={handleSubmit}>
        <div className='flex'>
          <input
            type='text'
            name='date'
            placeholder='Date'
            value={newEntry.date}
            onChange={handleInputChange}
            className='text-black'
          />
          <input
            type='text'
            name='time'
            placeholder='Time went to bed'
            value={newEntry.time}
            onChange={handleInputChange}
            className='text-black'
          />
          <input
            type='text'
            name='awakeTime'
            placeholder='Awake Time'
            value={newEntry.awakeTime}
            onChange={handleInputChange}
            className='text-black'
          />
          <input
            type='number'
            name='hours'
            placeholder='Hours Slept?'
            value={newEntry.hours}
            onChange={handleInputChange}
            className='text-black'
          />
          <input
            type='checkbox'
            name='rejuvanted'
            checked={newEntry.rejuvanted}
            onChange={handleInputChange}
            className='text-black'
          />
          <input
            type='text'
            name='mood'
            placeholder='Mood?'
            value={newEntry.mood}
            onChange={handleInputChange}
            className='text-black'
          />
        </div>
        <button className='text-[2rem] bg-black' type='submit'>
          Submit Time
        </button>
      </form>
      
      <h2 className='text-[2rem] text-slate-500'>Submitted Times</h2>
 
      <ul className='flex bg-blue-500'>
        {sleepEntries.map((entry, index) => (
          <li key={index}>
            <p>Date: {entry.date}</p>
            <p>Time Went to Bed: {entry.time}</p>
            <p>Awake Time: {entry.awakeTime}</p>
            <p>Hours Slept: {entry.hours}</p>
            <p>Rejuvanted: {entry.rejuvanted ? 'Yes' : 'No'}</p>
            <p>Mood: {entry.mood}</p>
          </li>
        ))}
      </ul>
    
    </div>
  );
};

export default SleepSchedule;