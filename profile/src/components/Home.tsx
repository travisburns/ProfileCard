import React from 'react'
import { Link } from 'react-router-dom';

type HomeProps = {
    totalSkillLevel: number;
};

const Home: React.FC<HomeProps> = ({totalSkillLevel}) => {
  return (
    <div className='bg-blue-200 w-[18%]'>
      <h1 className='text-[1.5rem]'>Web Development Skill Level</h1>
      <p>Total Skill Level: {totalSkillLevel}</p>
      <Link className='text-[1.2rem] bg-blue-600 text-white' to="techskills">Tech Stack</Link>
    </div>
  )
}

export default Home
