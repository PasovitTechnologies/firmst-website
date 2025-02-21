import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";
import "react-phone-input-2/lib/style.css";
import "react-toastify/dist/ReactToastify.css";
import "./RequestForm.css";
import { WhatsApp, Telegram, Instagram } from "@mui/icons-material";

// eslint-disable-next-line react/prop-types
const RequestForm = ({ footerRef }) => {
  const { t } = useTranslation(); // i18n hook
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    specialization: "",
    email: "",
    acceptTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/firmst-form/submit-form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        toast.success(t("requestForm.success_message"), {
          position: "top-center",
        });
        console.log(data.message); // Handle success response

        // Clear the form data after successful submission
        setFormData({
          name: "",
          phone: "",
          specialization: "",
          email: "",
          acceptTerms: false,
        });
      } else {
        const errorData = await response.json();
        console.error("Error from server:", errorData.message);
        toast.error(t("requestForm.error_message"), { position: "top-center" });
      }
    } catch (err) {
      console.error("Error submitting the form:", err);
      toast.error(t("requestForm.network_error_message"), {
        position: "top-center",
      });
    }
  };

  return (
    <section
      className="request-form-section"
      id="request-form-section"
      ref={footerRef}
    >
      {/* Toast Container for notifications */}
      <ToastContainer />
      <div className="form-container">
        {/* Left Side */}
        <div className="form-left">
          <h2 className="form-heading">{t("requestForm.heading")}</h2>
          <p className="form-description">{t("requestForm.description")}</p>
        </div>

        {/* Right Side: Form */}
        <div className="form-right">
          <form onSubmit={handleSubmit} className="">
            {/* Name Field */}
            <div className="form-group">
              <input
                type="text"
                className="bg-white text-black placeholder-gray-700 border-none"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder={t("requestForm.name")}
              />
            </div>

            {/* Contact Number Field with Country Code */}
            <div className="form-group">
              <PhoneInput
                country={"ru"}
                className="bg-white text-black placeholder-gray-700 border-none"
                value={formData.phone}
                onChange={handlePhoneChange}
                inputStyle={{
                  width: "100%",
                  height: "40px",
                  fontSize: "16px",
                }}
              />
            </div>

            {/* Specialization of Interest */}
            <div className="form-group">
              <input
                type="text"
                className="bg-white text-black placeholder-gray-700 border-none"
                name="specialization"
                value={formData.specialization}
                onChange={handleChange}
                required
                placeholder={t("requestForm.specialization")}
              />
            </div>

            {/* Email Field */}
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="bg-white text-black placeholder-gray-700 border-none"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder={t("requestForm.email")}
              />
            </div>

            <div>
              <p className="text-xs mb-3 text-gray-400">
              {t("requestForm.content")}
              </p>
            </div>

            {/* Terms and Conditions Checkbox */}
            <div className="form-group checkbox-group">
              <input
                type="checkbox"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleChange}
                required
                id="acceptTerms"
              />
              <label htmlFor="acceptTerms">
                {t("requestForm.accept_terms")}{" "}
                <a href="#">{t("requestForm.terms_conditions")}</a>
              </label>
            </div>

            {/* Submit Button */}
            <button type="submit" className="submit-button">
              {t("requestForm.submit")}
            </button>
          </form>
        </div>
      </div>{" "}
      <div
        className="w-full px-3 lg:px-20"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent:"space-between",
        }}
      >
        <div className="text-white text-xs md:text-md p-1">
          <p className="lg:text-lg">{t("address.title")}</p>
          <p>{t("address.descriptionOne")}</p>
          <p>{t("address.descriptionTwo")}</p>
        </div>
        <div style={{
          display:"flex",
          alignItems:"center"
        }}>
          <h1 className="text-white text-sm lg:text-lg lg:mr-2 mt-1 font-semibold">+7 999 999 000</h1>
          <div>
            <a
              href="https://wa.me/your-number"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsApp className="text-orange-500 ml-1 lg:mx-1 border-0 md:border-1 lg:p-1 border-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition duration-300 text-md md:text-3xl" />
            </a>

            <a
              href="https://t.me/your-username"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Telegram className="text-orange-500 ml-1 lg:mx-1 border-0 md:border-1 lg:p-1 border-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition duration-300 text-md md:text-3xl" />
            </a>

            <a
              href="https://instagram.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="text-orange-500 ml-1 lg:mx-1 border-0 md:border-1 lg:p-1 border-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition duration-300 text-md md:text-3xl" />
            </a>
            </div>
        </div>
      </div>
      <div className="footer-bottom">
        <hr className="footer-line" />
        <p>{t("copyright.title")}</p>
      </div>
    </section>
  );
};

export default RequestForm;

/*
      <div className="flex ">
        <div className="text-white text-md">
          <h1 className="text-lg font-semibold">{t("address.title")}</h1>
          <p>{t("address.descriptionOne")}</p>
          <p>{t("address.descriptionTwo")}</p>
        </div>

        <div className=" items-center">
          <h1 className="text-white text-3xl font-semibold">+7 999 999 000</h1>

          <a
            href="https://wa.me/your-number"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsApp
              className="text-orange-500 border-2 border-orange-500 p-1 rounded-full hover:bg-orange-500 hover:text-white transition duration-300"
              fontSize="large"
            />
          </a>

          <a
            href="https://t.me/your-username"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Telegram
              className="text-orange-500 border-2 border-orange-500 p-1 rounded-full hover:bg-orange-500 hover:text-white transition duration-300"
              fontSize="large"
            />
          </a>

          <a
            href="https://instagram.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram
              className="text-orange-500 border-2 border-orange-500 p-1 rounded-full hover:bg-orange-500 hover:text-white transition duration-300"
              fontSize="large"
            />
          </a>
        </div>
      </div>
*/
