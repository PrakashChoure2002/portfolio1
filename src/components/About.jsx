import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-5">
        I am a web developer specializing in frontend programming. I am passionate about improving my skills and learning new technologies. I am open to learning and working with any web technology and am currently seeking an opportunity to contribute to a dynamic team.
        </p>

        <br />

        <p className="text-xl">
        I enjoy coding from scratch and bringing ideas to life. Connect with me to get your project done. I value minimalistic designs, thoughtful branding, and creating relatable customer experiences. Let’s discover together how we can make your project convert better!        I value minimalistic designs, thoughtful branding of the content, and customer relatable experience. Let’s discover together how we can make your project convert better!
        <br /> <br />
      
        </p>
      </div>
    </div>
  );
};

export default About;
