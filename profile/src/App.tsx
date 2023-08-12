import React, { useState, useEffect } from 'react';
import './App.css';
import TechStack from './components/TechStack';

type Skill = {
  name: string;
  level: number;
};





function App() {
  const [skills, setSkills] = useState<Skill[]>([]);

  // Load skills from local storage when the component mounts
  useEffect(() => {
    const storedSkills = localStorage.getItem('skills');
    if (storedSkills) {
      setSkills(JSON.parse(storedSkills));
    } else {
      // Set default skills if none are stored
      setSkills([
        { name: 'Html', level: 0 },
    { name: 'Css:', level: 0 },
    { name: 'Javascript:', level: 0 },
    { name: 'SCSS:', level: 0 },
    { name: 'Bootstrap:', level: 0 },
    { name: 'Tailwind Css:', level: 0 },
    { name: 'Jquery:', level: 0 },
    { name: 'React:', level: 0 },
    { name: 'React hooks:', level: 0 },
    { name: 'React router:', level: 0 },
    { name: 'React forms:', level: 0 },
    { name: 'motion framer:', level: 0 },
    { name: 'threeJS:', level: 0 },
    { name: 'react three-fiber:', level: 0 },
    { name: 'NodeJs:', level: 0 },
    { name: 'ExpressJS:', level: 0 },
    { name: 'MongoDB:', level: 0 },
    { name: 'C#:', level: 0 },
    { name: 'Typescript:', level: 0 },
    // Add more skills here
 
      ]);
    }
  }, []);

  const updateSkillLevel = (index: number) => {
    setSkills(prevSkills => {
      const updatedSkills = [...prevSkills];
      updatedSkills[index].level++;
      localStorage.setItem('skills', JSON.stringify(updatedSkills)); // Save skills to local storage
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



    
 

  