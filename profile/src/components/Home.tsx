import React from 'react'

type HomeProps = {
    totalSkillLevel: number;
};

const Home: React.FC<HomeProps> = ({totalSkillLevel}) => {
  return (
    <div>
      <h1>Total Skill Level {totalSkillLevel}</h1>
    </div>
  )
}

export default Home
