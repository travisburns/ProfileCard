import React from 'react'

type sleepStats = {
    time: Date
    hours: number
    rejuvanted: boolean
}


const sleepTime = () => {
    const [time, setTime] = React.useState<sleepStats>()
} 

const SleepSchedule = () => {
  
  
  
    return (
    <div className='bg-purple-900 text-white'>
        <h1 className='text-[5rem]'>Sleep Schedule</h1>
        <form>
            <input type="text" placeholder='Time went to bed ' className='text-black' />
        <button className='text-[2rem] bg-black' onClick={()=> sleepTime()}>Submit Time</button>
        </form>
        <h2>Submitted Times</h2>
        <ul>
            
        </ul>
        
        
    </div>
  )
}

export default SleepSchedule
