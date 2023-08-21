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