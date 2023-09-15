import React from 'react'
import { Link } from 'react-router-dom'

type HomeProps = {
    totalSkillLevel: number;
};


const TechBoard: React.FC<HomeProps> = ({totalSkillLevel}) => {
  return (
    
     <div> 
      <p>{totalSkillLevel}</p>
     
    </div>
  )
}

export default TechBoard
