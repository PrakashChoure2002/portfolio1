import React, { useState } from "react";

const Portfolio = () => {
  const [visibleDetails, setVisibleDetails] = useState(null);

  const portfolios = [
    {
      id: 1,
      src: "https://static.wingify.com/gcp/uploads/sites/3/2021/09/Feature-image-7-ecommerce.png",
      link: 'https://prakashchoure2002.github.io/ecommerce_deploy/',
      repo: 'https://github.com/PrakashChoure2002/ecommerce_deploy',
      details: "React, Redux, Tailwind CSS "
    },
    {
      id: 2,
      src: "https://herobot.app/wp-content/uploads/2022/11/11-Reasons-Why-A-Chat-Application-Is-Great-For-Business_1.jpg",
      link: 'https://chatapp2a-90c26.web.app/',
      repo: '#https://chatapp2a-90c26.web.app/',
      details: `React, Redux, Tailwind CSS, Firebase  `
    },
    {
      id: 3,
      src: "https://jupiter.money/blog/wp-content/uploads/2023/09/Overspending-image-jupiter.png",
      link: 'https://prakashchoure2002.github.io/Expance_tracker/',
      repo: 'https://github.com/PrakashChoure2002/Expance_tracker',
      details: "React, Redux, Tailwind CSS "
    }
  ];

  const toggleDetails = (id) => {
    setVisibleDetails(visibleDetails === id ? null : id);
  };

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-8 md:px-12">
          {portfolios.map(({ id, src, link, repo, details }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg overflow-hidden">
              <img
                src={src}
                alt="project"
                className="rounded-md duration-200 hover:scale-105 w-full"
              />
              <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-center justify-center">
                <button
                  className="w-full sm:w-1/2 md:w-full lg:w-1/2 px-6 py-3 m-2 duration-200 hover:scale-105"
                  onClick={() => window.open(link, '_blank')}
                >
                  Demo
                </button>
                <button
                  className="w-full sm:w-1/2 md:w-full lg:w-1/2 px-6 py-3 m-2 duration-200 hover:scale-105"
                  onClick={() => toggleDetails(id)}
                >
                  Details
                </button>
                <button
                  className="w-full sm:w-1/2 md:w-full lg:w-1/2 px-6 py-3 m-2 duration-200 hover:scale-105"
                  onClick={() => window.open(repo, '_blank')}
                >
                  GitHub
                </button>
              </div>
              {visibleDetails === id && (
                <div className="p-4 font-bold">
                  <p>Technology Used: {details}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
