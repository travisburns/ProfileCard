import React from 'react'

type Skill = {
    name: string;
    level: number;
}

type TechStackProps = {
    skills: Skill[];
    updateSkillLevel: (index: number) => void;
}

const TechStack: React.FC<TechStackProps> = ({skills, updateSkillLevel }) => {
  return (
    <div className=''>
      <h1 className='text-[3rem]'>Tech Skills</h1>
      <ul className='tech list bg-slate-950 relative '>
       {
        skills.map((skill, index) => (
            <li className='text-[1.9rem] text-white' key={index}>
                {skill.name}
                <span>
                    {skill.level}
                    <button className='bg-blue-500 text-[.9rem]' onClick={() => updateSkillLevel(index)}>Add Level</button>
                </span>
            </li>
        ))
       }
      </ul>
    </div>
  )
}

export default TechStack
