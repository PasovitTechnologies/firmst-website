import { useTranslation } from "react-i18next";
import PropTypes from "prop-types"; // Import PropTypes
import "./HeroSection.css";
import herosectionImage from "../../public/herosection.png";

const HeroSection = ({ footerRef }) => {
  const { t } = useTranslation();

  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="mt-[100px] min-h-[80vh] w-full overflow-x-hidden text-[#00295F]">
      <div className="container mx-auto px-4 h-full">
        <div className="flex flex-col-reverse lg:flex-row items-center h-full gap-8">
          <div className="w-full lg:w-1/2 lg:p-10 lg:text-left">
            <div className="lg:pl-16">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                {t("homepage.title")}
              </h1>
              <p className="my-6 text-sm lg:text-sm max-w-2xl lg:mx-0">
                {t("homepage.description")}
              </p>
              <div>
                <button 
                  onClick={scrollToFooter} 
                  className="px-6 py-3 rounded-md text-sm text-white bg-orange-500 hover:bg-orange-600 transition-colors duration-300 shadow-md"
                >
                  {t("homepage.button")}
                </button>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 mt-8">
            <img
              src={herosectionImage}
              alt={t("hero.image_alt")}
              className="w-full h-auto object-contain max-w-4xl mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// ✅ Define PropTypes for `footerRef`
HeroSection.propTypes = {
  footerRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }),
};

export default HeroSection;
