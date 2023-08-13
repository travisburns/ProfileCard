import React from 'react'

type Skill = {
    name: string;
    level: number;
}

type TechStackProps = {
    skills: Skill[];
    updateSkillLevel: (index: number) => void;
    decreaseSkillLevel: (index: number) => void;
}

const TechStack: React.FC<TechStackProps> = ({skills, updateSkillLevel, decreaseSkillLevel }) => {
  return (
    <div className=''>
      <h1 className='text-[3rem]'>Tech Skills</h1>
      <ul className='tech list bg-slate-950 relative '>
       {
        skills.map((skill, index) => (
            <li className='text-[1.9rem] text-white flex justify-evenly' key={index}>
                <div>
                {skill.name}
                <div className="buttons">
                <button className='bg-blue-500 text-[.9rem] mr-1' onClick={() => updateSkillLevel(index)}>Add Level</button>
                <button className='bg-red-500 text-[.9rem]' onClick={() => decreaseSkillLevel(index)}>Decrease Level</button>
                </div>
               </div>
                <div>
                {skill.level} 
                </div>
                
            </li>
        ))
       }
      </ul>
    </div>
  )
}

export default TechStack
