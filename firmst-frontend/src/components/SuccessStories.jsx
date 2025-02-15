import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./SuccessStories.css";
import arrow from "../../public/arrow.png";
import star from "../../public/Star.png";
import successPerson from "../../public/success.png";

const SuccessStories = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Mobile view when width < 1024px
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const stories = [
    {
      id: 1,
      header: "15+ Years",
      description: "Of Experience Organising Successful Medical Programmes",
      iconImage: arrow,
      bgColor: "rgb(201,188,253)",
      height: "h-[260px] lg:h-[260px]"
    },
    {
      id: 2,
      header: "100+",
      description: "Medical interns have been sent abroad and trained by renowned medical experts",
      iconImage: star,
      bgColor: "#B6EEFE",
      height: "h-[320px] lg:h-[320px]"
    },
    {
      id: 3,
      header: "100%",
      description: "Fast and guaranteed visa application services",
      iconImage: successPerson,
      bgColor: "#FED5B0",
      height: "h-[400px] lg:h-[400px]"
    }
  ];

  return (
    <>
      {/* Show this section on tablet & laptop (width ≥ 1024px) */}
      {!isMobile && (
        <section className="px-4 lg:px-14 py-8">
        <h2 className="text-3xl font-bold mb-8 text-center lg:text-left">
        {t("success_stories.heading").split(" ").slice(0, -1).join(" ")}{" "}
        <span className="text-orange-500">
          {t("success_stories.heading").split(" ").slice(-1)}
        </span>
      </h2>
      
          <div className="flex flex-col lg:flex-row items-center lg:items-end justify-center gap-8 lg:gap-5">
            {stories.map((story, index) => (
              <motion.div
                key={story.id}
                className={`w-full lg:w-[250px] ${story.height} rounded-t-[150px] flex flex-col items-center justify-center px-5 lg:px-8`}
                style={{ backgroundColor: story.bgColor }}
                initial={{ 
                  opacity: 0,
                  y: 50,
                  scale: 0.9
                }}
                whileInView={{ 
                  opacity: 1,
                  y: 0,
                  scale: 1
                }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.2,
                  ease: "easeOut"
                }}
              >
                <h1 className="text-3xl lg:text-4xl font-bold mt-14 lg:mt-10">
                  {story.header}
                </h1>
                <p className="text-sm font-semibold text-center w-full lg:w-52 mt-4">
                  {story.description}
                </p>
                <img 
                  src={story.iconImage} 
                  alt="" 
                  className={`mt-auto ${
                    story.id === 1 ? 'h-[60px]' : 
                    story.id === 2 ? 'h-[100px] object-cover' : 
                    'w-56'
                  }`}
                />
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Show this section only on mobile (width < 1024px) */}
      {isMobile && (
        <section className="px-4 py-8">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {t("success_stories.heading")}
          </h2>

          {/* First Card */}
          <div className="bg-[rgb(201,188,253)] w-[260px] h-[200px] rounded-r-[150px] flex items-center gap-3">
            <img src={arrow} alt="" className="h-[30px]" />
            <div>
              <h1 className="text-4xl my-1 font-bold">15+ Years</h1>
              <p className="w-44 font-semibold text-xs">
                Medical interns have been sent abroad and trained by renowned medical experts
              </p>
            </div>
          </div>

          {/* Second Card */}
          <div className="bg-[#B6EEFE] w-[320px] h-[200px] rounded-r-[150px] flex items-center gap-3">
            <img src={star} alt="" className="h-[50px]" />
            <div>
              <h1 className="text-4xl my-1 font-bold">100+</h1>
              <p className="w-44 font-semibold text-xs">
                Medical interns have been sent abroad and trained by renowned medical experts
              </p>
            </div>
          </div>

          {/* Third Card */}
          <div className="bg-[#FED5B0] w-[360px] h-[200px] rounded-r-[150px] flex items-center gap-3">
            <img src={successPerson} alt="" className="h-[220px] mb-4" />
            <div>
              <h1 className="text-4xl my-1 font-bold">100%</h1>
              <p className="w-44 text-xs font-semibold">
                Fast and guaranteed visa application services
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default SuccessStories;
