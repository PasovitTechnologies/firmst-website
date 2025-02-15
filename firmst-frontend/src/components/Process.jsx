import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./Process.css";

const Process = () => {
  const { t } = useTranslation(); // i18n hook
  const steps = t("process.steps", { returnObjects: true }); // Get translated steps

  return (
    <section className="w-full">
      <div className="text-left pl-5 lg:pl-10">
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
        initial={{ opacity: 0, x: 100 }} // Slide from right
        whileInView={{ opacity: 1, x: 0 }}
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
        initial={{ opacity: 0, x: -100 }} // Slide from left
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div>
          <h3 className="font-bold text-2xl my-1">{step.title}</h3>
          <p className="font-semibold ">{step.description}</p>
        </div>
      </motion.div>
    ))}
  </div>
</div>

    </section>
  );
};

export default Process;
