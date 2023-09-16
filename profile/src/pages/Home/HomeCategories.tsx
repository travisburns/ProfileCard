type HomeCategory = {
  title: string;
  attr1: string;
  attr2: number | null; // Update the type to accept a component
};

const HomeCategoryCard: React.FC<HomeCategory> = ({ title, attr1, attr2 }) => {
  return (
    <div className='bg-[#0FA3B1]  mb-[4rem] mx-[1.1rem] rounded-3xl w-[35%] text-center text-black text-[1.3rem]'>
      <div className='text-[1rem]'>
        <p className='team-card_title'>{title}</p>
        <p className='team-card_attr1'>{attr1}</p>
      </div>
      <div>
        {attr2}
      </div>
    </div>
  );
};

const HomeCategories: React.FC<{
  totalSkillLevel: number;
}> = ({ totalSkillLevel }) => {
  console.log(totalSkillLevel);
  const categoryData: HomeCategory[] = [
    {
      title: 'techSkills',
      attr1: 'TotalSkillLevel',
      attr2: totalSkillLevel, // Use the first component
    },
    {
      title: 'sleepSchedule',
      attr1: 'TotalSkillLevel',
      attr2: null, // No component for this category
    },
  
    // Add more categories as needed
  ];

  return (
    <>
      <h1 className='text-white font-playfair text-[2.5rem] mb-[10%] ml-[10%] md:text-[4.2rem]'>
        Topics
      </h1>
      <div className='flex flex-wrap md:ml-[10%]'>
        {categoryData.map((category, index) => (
          <HomeCategoryCard
            key={index}
            title={category.title}
            attr1={category.attr1}
            attr2={category.attr2}
          />
        ))}
      </div>
    </>
  );
};

export default HomeCategories;