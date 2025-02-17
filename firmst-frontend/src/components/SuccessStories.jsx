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

  console.log(isMobile);
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
      header: t("successStory.sectionOne.title"),
      description: t("successStory.sectionOne.description"),
      iconImage: arrow,
      bgColor: "rgb(201,188,253)",
      height: "h-[260px] lg:h-[260px]",
    },
    {
      id: 2,
      header: t("successStory.sectionTwo.title"),
      description: t("successStory.sectionTwo.description"),
      iconImage: star,
      bgColor: "#B6EEFE",
      height: "h-[320px] lg:h-[320px]",
    },
    {
      id: 3,
      header: t("successStory.sectionThree.title"),
      description: t("successStory.sectionThree.description"),
      iconImage: successPerson,
      bgColor: "#FED5B0",
      height: "h-[400px] lg:h-[400px]",
    },
  ];

  return (
    <>
      {/* Show this section on tablet & laptop (width ≥ 1024px) */}
      {!isMobile && (
        <section className="px-4 lg:px-14 py-8">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {t("successStory.title").split(" ").slice(0, -1).join(" ")}{" "}
            <span className="text-orange-500">
              {t("successStory.title").split(" ").slice(-1)}
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
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: "easeOut",
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
                    story.id === 1
                      ? "h-[60px]"
                      : story.id === 2
                      ? "h-[100px] object-cover"
                      : "w-56"
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
          <div className="bg-[rgb(201,188,253)] w-[260px] h-[180px] rounded-r-[150px] relative">
            <img
              src={arrow}
              alt=""
              className=" h-[25px]  absolute top-16 left-0"
            />
            <div className="h-full flex flex-col justify-center ml-10">
              <h1 className="text-4xl my-1 w-full px-4 font-bold">
                {t("15+ Years")}
              </h1>
              <p className="w-44 font-semibold text-xs">
                {t(
                  "Medical interns have been sent abroad and trained by renowned medical experts"
                )}
              </p>
            </div>
          </div>

          {/* Second Card */}
          <div className="bg-[#B6EEFE] w-[320px] h-[180px] rounded-r-[150px] relative">
            <img
              src={star}
              alt=""
              className="h-[50px] absolute top-14 left-[-20px] rotate-90"
            />
            <div className="h-full flex flex-col justify-center">
              <h1 className="text-4xl my-1  w-[70%] px-5 font-bold">
                {t("100+")}
              </h1>
              <p className="w-44 font-semibold text-xs">
                {t(
                  "Medical interns have been sent abroad and trained by renowned medical experts"
                )}
              </p>
            </div>
          </div>

          {/* Third Card */}
          <div className="bg-[#FED5B0] w-[360px] h-[200px] rounded-r-[150px] relative">
            <img
              src={successPerson}
              alt=""
              className="h-[180px] absolute top-5 left-0 mb-4"
            />
            <div className="h-full flex flex-col justify-center ml-24">
              <h1 className="text-4xl my-1 font-bold  w-full px-8">
                {t("100%")}
              </h1>
              <p className="w-44 text-xs font-semibold">
                {t("Fast and guaranteed visa application services")}
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default SuccessStories;
