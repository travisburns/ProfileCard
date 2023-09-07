import React from 'react'
import { Link } from 'react-router-dom';



type HomeProps = {
    totalSkillLevel: number;
};

const Home: React.FC<HomeProps> = ({totalSkillLevel}) => {
  return (
    <>
    <div className='bg-slate-800 rounded-3xl mx-[1.1rem]'>
    <p className='text-[1.5rem] text-white'>Welcome Back, Travis. </p>
    <p className='text-[.8rem] text-white'>You're one step closer to acheiving your goals </p>
    <div className='bg-slate-500 rounded-3xl mx-[1.1rem] mt-[2rem]'>
      <h2 className='text-white text-center'>Weekly Task</h2>
    </div>
    </div>
    <div className='bg-blue-200 w-[18%] mb-[4rem]'>
      <h1 className='text-[1.5rem]'>Web Development Skill Level</h1>
      <p>Total Skill Level: {totalSkillLevel}</p>
      <Link className='text-[1.2rem] bg-blue-600 text-white' to="techskills">Tech Stack</Link>
    </div>
   
  </>
  )
}

export default Home
