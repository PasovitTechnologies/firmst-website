import { useTranslation } from "react-i18next"; // Import translation hook
import "./HeroSection.css"; 
import herosectionImage from "../../public/herosection.png";

/*Expected Data*/

// const data = {
//   "hero": {
//     "title": "We offer the best medical internship programmes abroad",
//     "description": "We help make your dream come true: we select study programs, scholarships and grants, and provide support at all stages of admission to the best universities in the world.",
//     "button_text": "FREE CONSULTATION",
//     "image_alt": "Hero section image"
//   }
// }


const HeroSection = () => {
  const { t } = useTranslation(); // Initialize translation hook

  return (
    <div className="mt-16 lg:mt-20 min-h-[80vh] w-full overflow-x-hidden">
      <div className="container mx-auto px-4 h-full">
        <div className="flex flex-col-reverse lg:flex-row items-center h-full gap-8">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 lg:p-10 lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:pl-16 lg:text-5xl text-blue-950 font-bold leading-tight">
              {t("We offer the best medical internship programmes abroad")} {/* Translation Key */}
            </h1>
            <p className="my-6 text-sm md:text-base lg:pl-16 lg:text-sm max-w-2xl mx-auto lg:mx-0">
              {t("We help make your dream come true: we select study programs, scholarships and grants, and provide support at all stages of admission to the best universities in the world.")} {/* Translation Key */}
            </p>
            <div className="lg:pl-16">
              <button className="px-6 py-3 rounded-md text-sm text-white bg-orange-500 hover:bg-orange-600 transition-colors duration-300 shadow-md">
                {t("FREE CONSULTATION")} {/* Translation Key */}
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2 mt-8">
            <img 
              src={herosectionImage} 
              alt={t("hero.image_alt")} /* Translation for accessibility */
              className="w-full h-auto object-contain max-w-4xl mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
