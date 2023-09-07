import React from 'react'
import { Link } from 'react-router-dom'

type HomeProps = {
    totalSkillLevel: number;
};


const TechBoard: React.FC<HomeProps> = ({totalSkillLevel}) => {
  return (
    <div className='bg-[#0FA3B1] text-[#F9F7F3] mb-[4rem] mx-[1.1rem] rounded-3xl w-[50%] text-center text-black text-[1.3rem]'>
      <h1 className='text-[1rem] '>Web Development Skill Level</h1>
      <p className=''>Total Skill Level: {totalSkillLevel}</p>
      <Link className='text-[1.2rem] bg-[#EDDEA4] ' to="techskills">Tech Stack</Link>
    </div>
  )
}

export default TechBoard
