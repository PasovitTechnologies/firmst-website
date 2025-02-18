import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./Process.css";
import backgroungImage from "../../public/background.png"
const Process = () => {
  const { t } = useTranslation();
  const steps = t("process.steps", { returnObjects: true });

  return (
    <section className="w-full lg:bg-cover bg-center py-2 bg-no-repeat" style={{
      backgroundImage: `url(${backgroungImage})`
    }}>
      <div className="text-center pl-5 lg:pl-10">
        <h2 className="text-4xl font-bold text-[#00295F]">{t("process.heading")}</h2>
        <p className="text-xl text-orange-500">{t("process.subheading")}</p>
      </div>

      <div className="flex flex-col lg:flex-row justify-center gap-8 px-8 my-5">
        {/* Right Column (First 3 Steps) */}
        <div className="flex flex-col gap-8">
          {steps.slice(0, 3).map((step, index) => (
            <motion.div
              key={index}
              className="process-card"
              initial={{ opacity: 0, y: 50, scale: 0.9 }} // Start slightly below & smaller
              whileInView={{ opacity: 1, y: 0, scale: 1 }} // Bounce up
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="font-bold text-2xl my-1">{step.title}</h3>
                <p className="font-semibold">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Left Column (Last 2 Steps) */}
        <div className="flex flex-col gap-8 justify-center">
          {steps.slice(3, 5).map((step, index) => (
            <motion.div
              key={index + 3}
              className="process-card"
              initial={{ opacity: 0, y: 50, scale: 0.9 }} // Start below
              whileInView={{ opacity: 1, y: 0, scale: 1 }} // Bounce up
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="font-bold text-2xl my-1">{step.title}</h3>
                <p className="font-semibold">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
