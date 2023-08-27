import React, { useState, useEffect } from 'react';
import { format, addDays, startOfMonth, endOfMonth, isSameDay } from 'date-fns';

interface Task {
  date: Date;
  task: string;
}

const Calendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { date: selectedDate, task: newTask }]);
      setNewTask('');
    }
  };

  const handleTaskDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  const monthStartDate = startOfMonth(selectedDate);
  const monthEndDate = endOfMonth(selectedDate);

  const daysInMonth: Date[] = [];
  let currentDate = monthStartDate;

  while (currentDate <= monthEndDate) {
    daysInMonth.push(currentDate);
    currentDate = addDays(currentDate, 1);
  }

  // Load tasks from local storage on component mount
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]') as Task[];
    setTasks(storedTasks);
  }, []);

  // Save tasks to local storage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className='p-4'>
      <div>
      <p>
      6:00 AM - Wake up
Ensure you're getting enough quality sleep to wake up refreshed.

6:30 AM - Morning hygiene

7:05 AM - Leave for work

7:30 AM - 10:00 AM - Work
Focus on essential tasks and maximize productivity during these hours.

10:30 AM - Workout
Engage in physical activity to boost energy and well-being.

11:30 AM - Crypto Research, Eat
Fuel yourself with a balanced meal and explore your crypto interests.

12:30 PM - Break
Take a longer break to recharge mentally.

12:45 PM - Programming, Client Sites
Dedicate time to programming tasks, including freelance work.

3:45 PM - Learning Programming Theories
Engage in focused learning during your natural cognitive peak.

7:45 PM - Break
Enjoy leisure or relaxation activities during this time.

8:00 PM - 8:45 PM: World Building (Imagination and Creativity)
Engage in creative world-building, focusing on broad ideas and themes.

9:00 PM - Watch Something
Relax with entertainment to wind down.

9:30 PM - Learning Japanese
Engage in language learning earlier in the evening for better retention.

9:45 PM - Prepare for Next Day
Get organized and set priorities for the following day.

10:00 PM - Nightly Routine
Prepare for sleep with calming activities.

10:30 PM - Sleep
Ensure you're getting sufficient rest for the day ahead.

      </p>



      </div>
      <h1 className='text-2xl mb-4'>Calendar</h1>
      <div className='mb-4'>
        <input
          type='text'
          placeholder='Add a new task'
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className='border p-2 mr-2'
        />
        <button onClick={handleAddTask} className='bg-blue-500 text-white px-4 py-2'>
          Add Task
        </button>
        <input
          type='date'
          value={format(selectedDate, 'yyyy-MM-dd')}
          onChange={(e) => handleTaskDateChange(new Date(e.target.value))}
          className='border p-2 ml-2'
        />
      </div>
      <div className='grid grid-cols-7 gap-2'>
        {daysInMonth.map((day, index) => {
          const formattedDate = format(day, 'MMMM d, yyyy');
          const dayTasks = tasks.filter((task) => isSameDay(task.date, day));

          return (
            <div
              key={index}
              className='border p-2 text-center'
              onClick={() => handleDateClick(day)}
            >
              <div className='mb-2'>{formattedDate}</div>
              {dayTasks.map((task, taskIndex) => (
                <div key={taskIndex}>{task.task}</div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;