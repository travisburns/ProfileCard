import React, { useState } from 'react';
import './App.css';
import TechStack from './components/TechStack';

type Skill = {
  name: string;
  level: number;
};

function App() {
  const [skills, setSkills] = useState<Skill[]>([
    { name: 'Html', level: 0 },
    { name: 'Css', level: 0 }
    // Add more skills here
  ]);

  const updateSkillLevel = (index: number) => {
    setSkills(prevSkills => {
      const updatedSkills = [...prevSkills];
      updatedSkills[index].level ++;
      return updatedSkills;
    });
  };

  return (
    <div>
      <TechStack skills={skills} updateSkillLevel={updateSkillLevel} />
    </div>
  );
}

export default App;