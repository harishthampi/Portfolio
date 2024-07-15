import React from 'react'

export default function About() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b
    from-gray-800 to-black text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center  w-full h-full">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Hello! I’m Harish, a dedicated front-end developer with a
          strong background in team leadership. For two years, I led a dynamic
          team at CareStack, where I honed my skills in project management and
          team collaboration. Although I thrived in my leadership role, I found
          myself increasingly drawn to the technical challenges and creative
          possibilities within our projects, particularly in crafting
          user-friendly and visually appealing interfaces. This growing passion
          led me to make a significant career shift and pursue a Master's in
          Software Development. 
        </p>
        <br />
        <p className="text-xl">
        In my Master's program, I have focused on
          front-end development, mastering technologies like HTML, CSS, and
          JavaScript, and delving into front-end frameworks such as React.
          Additionally, I have gained valuable experience in back-end
          development with Node.js, allowing me to build comprehensive and
          robust web applications. My combined expertise in both front-end and
          back-end development, coupled with my leadership experience, enables
          me to approach projects with both technical skill and strategic
          insight. I am excited to continue this journey, creating engaging and
          intuitive web experiences that blend creativity and technology. Join
          me as I bring innovative ideas to life on the web!
        </p>
      </div>
    </div>
  );
}
