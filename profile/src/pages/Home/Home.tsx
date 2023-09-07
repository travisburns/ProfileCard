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
    <TechBoard totalSkillLevel={totalSkillLevel} />
   
  </>
  )
}

export default Home
