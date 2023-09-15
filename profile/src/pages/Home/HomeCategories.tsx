import React from 'react'


type HomeCategory = {
  title: string;
  attr1: string;
}


const HomeCategoryCard: React.FC<HomeCategory> = ({title, attr1}) => {
  return (
    <div className='team-card mb-5 w-[80%] ml-[10%] sm:ml-[18%] md:w-[46%] md:ml-[0%]'>
      <div className='bg-yellow-300 text-black font-playfair text-center w-[100%] sm:w-[80%] md:w-[94%]'>
        <p className='team-card_title'>{title}</p>
        <p className='team-card_attr1'>{attr1}</p>
      </div>
    </div>
  );
};




  const HomeCategories: React.FC<HomeCategory> = () => {
  const categoryData: HomeCategory[] = [
    
    {
        
        
        title: "techSkills",
        attr1: "TotalSkillLevel"
    },

    {
        
   
      title: "sleepSchedule",
      attr1: "TotalSkillLevel"
  },


  

 ];



return (
    <>
     <h1 className='text-white font-playfair text-[2.5rem] mb-[10%] ml-[10%] md:text-[4.2rem]'>Topics</h1>

    <div className='md:flex flex-wrap md:ml-[10%]'>
        {categoryData.map((category, index) => (
            <HomeCategoryCard 
            key={index}
            title={category.title}
            attr1={category.attr1}
            
            
            />
        ))}
    </div>
    </>
)
    

    }



export default HomeCategories
