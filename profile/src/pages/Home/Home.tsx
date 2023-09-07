import React from 'react'
import { Link } from 'react-router-dom';
import AdminBoard from './AdminBoard';
import TechBoard from './TechBoard';



type HomeProps = {
    totalSkillLevel: number;
};

const Home: React.FC<HomeProps> = ({totalSkillLevel}) => {
  return (
    <>
    
    <AdminBoard />
    <h1 className='text-black font-bold ml-[2rem] my-[1rem]'>Skills</h1>
    <TechBoard totalSkillLevel={totalSkillLevel} />
   
  </>
  )
}

export default Home
