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
    <div>
      <h1>Tech Skills</h1>
      <ul className='tech list'>
       {
        skills.map((skill, index) => (
            <li key={index}>
                {skill.name}
                <span>
                    {skill.level}
                    <button className='bg-blue-500' onClick={() => updateSkillLevel(index)}>Add Level</button>
                </span>
            </li>
        ))
       }
      </ul>
    </div>
  )
}

export default TechStack
