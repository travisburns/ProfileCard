import React from 'react';

type SkillLevelSummaryProps = {
  totalSkillLevel: number;
};

const SkillLevelSummary: React.FC<SkillLevelSummaryProps> = ({ totalSkillLevel }) => {
  const getTextBasedOnLevel = (level: number) => {
    if (level >= 1900) {
      return { text: 'Master', colorClass: 'text-gold' };
    } else if (level >= 1584) {
      return { text: 'Expert', colorClass: 'text-red-500' };
    } else if (level >= 1268) {
      return { text: 'Adept', colorClass: 'text-yellow-500' };
    } else if (level >= 952) {
      return { text: 'Intermediate', colorClass: 'text-green-500' };
    } else if (level >= 636) {
      return { text: 'Novice', colorClass: 'text-blue-500' };
    } else {
      return { text: 'Beginner', colorClass: 'text-gray-500' };
    }
  };

  const { text, colorClass, } = getTextBasedOnLevel(totalSkillLevel);

  return (
    <div className="bg-slate-900 p-4 mt-4 max-w-[40%]">
      <p className={`${colorClass}`}>{text} {totalSkillLevel}</p>
    </div>
  );
};

export default SkillLevelSummary;