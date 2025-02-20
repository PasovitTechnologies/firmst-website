import React from "react";
import { useTranslation } from "react-i18next";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Programs.css"; // Import CSS
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"; // Import Icons

const Programs = () => {
  const { t } = useTranslation();
  const programs = t("programs.locations", { returnObjects: true }); // Get translated programs

  return (
    <section className="p-5 lg:p-10 relative">
      <div className="mb-10 flex items-center justify-center">
        <h2 className="text-3xl text-[#00295F] font-bold lg:text-center lg:w-[650px]">
          {t("programs.heading").split(" ").slice(0, 4).join(" ")}{" "}
          <span className="text-orange-500">
            {t("programs.heading").split(" ").slice(4).join(" ")}
          </span>
        </h2>
      </div>

      <Carousel
        showArrows={true} // Enable arrows
        showThumbs={false}
        autoPlay={true}
        interval={5000}
        selectedItem={0}
        transitionTime={600}
        swipeable={true}
        showStatus={false}
        emulateTouch={true}
        stopOnHover={true}
        infiniteLoop={false} // Disable infinite loop to prevent reverse movement
        renderArrowPrev={(onClickHandler, hasPrev, label) => (
          <button
            type="button"
            onClick={onClickHandler}
            className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 
            bg-gray-800 text-white p-2 md:p-3 rounded-full shadow-lg hover:bg-gray-900 z-50"
            aria-label={label}
            style={{ display: hasPrev ? "block" : "none" }} // Hide if no previous slide
          >
            <IoIosArrowBack className="w-6 h-6 md:w-7 md:h-7" />
          </button>
        )}
        renderArrowNext={(onClickHandler, hasNext, label) => (
          <button
            type="button"
            onClick={onClickHandler}
            className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 
            bg-gray-800 text-white p-2 md:p-3 rounded-full shadow-lg hover:bg-gray-900 z-50"
            aria-label={label}
            style={{ display: hasNext ? "block" : "none" }} // Hide if no next slide
          >
            <IoIosArrowForward className="w-6 h-6 md:w-7 md:h-7" />
          </button>
        )}
      >
        {programs.map((program, index) => (
          <div key={index} className="carousel-item">
            {/* Left Column (Content) */}
            <div className="carousel-content">
              <h3 className="">{program.title}</h3>
              <ul className="program-points">
                {program.points.map((point, i) => (
                  <li key={i} className="font-semibold text-[#00295F]">{point}</li>
                ))}
              </ul>
            </div>

            {/* Right Column (Image) */}
            <div className="carousel-image">
              <img src={program.image} alt={program.title} />
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Programs;
