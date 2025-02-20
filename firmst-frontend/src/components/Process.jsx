import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./Process.css";
import backgroungImage from "../../public/background.png";

const Process = () => {
  const { t } = useTranslation();
  const steps = t("process.steps", { returnObjects: true });

  return (
    <section
      className="w-full lg:bg-cover bg-center py-2 bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroungImage})`,
      }}
      id="programs-section"
    >
      <div className="text-center pl-5 lg:pl-10">
        <h2 className="text-4xl font-bold text-[#00295F]">{t("process.heading")}</h2>
      </div>

      {/* ✅ Responsive Grid Layout: Mobile (1 column) | Large Screens (2 columns) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-8 my-5 max-w-3xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className={`process-card ${index % 2 !== 0 ? "lg:mt-8" : ""}`} // Only shift right column on larger screens
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
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
    </section>
  );
};

export default Process;
