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
       <ul>
        <button onClick={()=> sleepTime()}>Submit Time</button>
        
        </ul> 
    </div>
  )
}

export default SleepSchedule
