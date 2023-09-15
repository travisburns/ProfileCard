import React from 'react';
import { Link } from 'react-router-dom';
import AdminBoard from './AdminBoard';
import TechBoard from './TechBoard';
import HomeCategories from './HomeCategories';

type HomeProps = {
  totalSkillLevel: number;
  title: string;
  attr1: string;
};

const Home: React.FC<HomeProps> = ({ totalSkillLevel, title, attr1 }) => {
  return (
    <>
      <AdminBoard />
      <h1 className='text-black font-bold ml-[2rem] my-[1rem]'>Skills</h1>
      <TechBoard totalSkillLevel={totalSkillLevel} />
      <HomeCategories title={title} attr1={attr1}/>
    </>
  );
};

export default Home;