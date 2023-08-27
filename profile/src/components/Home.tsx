import React from 'react'
import { Link } from 'react-router-dom';
import TodoList from './TodoList';


type HomeProps = {
    totalSkillLevel: number;
};

const Home: React.FC<HomeProps> = ({totalSkillLevel}) => {
  return (
    <>
    <div>
    <p className='text-[3rem]'>Welcome Back, Travis. </p>
    
    </div>
    <div className='bg-blue-200 w-[18%] mb-[4rem]'>
      <h1 className='text-[1.5rem]'>Web Development Skill Level</h1>
      <p>Total Skill Level: {totalSkillLevel}</p>
      <Link className='text-[1.2rem] bg-blue-600 text-white' to="techskills">Tech Stack</Link>
    </div>
    <div className='bg-blue-200 w-[18%]'>
      <p><TodoList /></p>
    </div>
  </>
  )
}

export default Home
