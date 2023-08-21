import React, { useState, useEffect } from 'react';

type SleepStats = {
  time: string;
  hours: number;
  rejuvanted: boolean;
  mood: string;
  date: string;
  awakeTime: string;
  offRoutine: boolean;
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
    offRoutine: false
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
      offRoutine: false
    });
  };

  const handleDeleteEntry = (index: number) => {
    const updatedEntries = sleepEntries.filter((_, i) => i !== index);
    setSleepEntries(updatedEntries);
  };

  return (
    <div className='bg-purple-900 text-white p-4 w-[100%]'>
      <h1 className='text-5xl'>Sleep Schedule</h1>
      <form onSubmit={handleSubmit}>
  <div className='flex mb-2 w-[70%]'>
    <input
      type='text'
      name='date'
      placeholder='Date'
      value={newEntry.date}
      onChange={handleInputChange}
      className='text-black mr-2'
    />
    <input
      type='text'
      name='time'
      placeholder='Time went to bed'
      value={newEntry.time}
      onChange={handleInputChange}
      className='text-black mr-2'
    />
    <input
      type='text'
      name='awakeTime'
      placeholder='Awake Time'
      value={newEntry.awakeTime}
      onChange={handleInputChange}
      className='text-black mr-2'
    />
    <input
      type='number'
      name='hours'
      placeholder='Hours Slept?'
      value={newEntry.hours}
      onChange={handleInputChange}
      className='text-black mr-2'
    />
    <label className='flex items-center'>
      <input
        type='checkbox'
        name='rejuvanted'
        checked={newEntry.rejuvanted}
        onChange={handleInputChange}
        className='mr-2'
      />
      Rejuvanted?
    </label>
    <input
      type='text'
      name='mood'
      placeholder='Mood?'
      value={newEntry.mood}
      onChange={handleInputChange}
      className='text-black mr-2'
    />
    Off Routine?
    <input
      type='checkbox'
      name='OffRoutine'
      checked={newEntry.offRoutine}
      onChange={handleInputChange}
      className='text-black mr-2'
    />
  </div>
  <button className='text-[2rem] bg-black' type='submit'>
    Submit Time
  </button>
</form>

      <h2 className='text-2xl text-slate-500 mt-4'>Submitted Times</h2>

      <ul className=' p-4 flex flex-wrap'>
        {sleepEntries.map((entry, index) => (
          <li key={index} className='border-b border-gray-300 py-2 mr-[1rem] bg-blue-500 w-1/7'>
            <p className='bg-black'>Date: {entry.date}</p>
            <p>Time Went to Bed: {entry.time}</p>
            <p>Awake Time: {entry.awakeTime}</p>
            <p>Hours Slept: {entry.hours}</p>
            <p>Rejuvanted: {entry.rejuvanted ? 'Yes' : 'No'}</p>
            <p>Mood: {entry.mood}</p>
            <button onClick={() => handleDeleteEntry(index)} className='text-white bg-red-500'>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SleepSchedule;