import { assets } from "@/assets/assets";
import React, { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import toast from "react-hot-toast";
const Contact = () => {
  const formAccessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESSKEY;
  const formUrl = process.env.NEXT_PUBLIC_WEB3FORMS_URL;

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending");
    const formData = new FormData(event.target);

    formData.append("access_key", formAccessKey);

    const response = await fetch(formUrl, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      event.target.reset();
      toast.success("Form submitted successfully");
    } else {
      toast.error(data.message);
    }
  };

  return (
    <motion.div
      id="contact"
      className="contact-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
    >
      <motion.h4
        className="section-subtitle"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        Connect with me
      </motion.h4>
      <motion.h2
        className="section-title"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Get in touch
      </motion.h2>
      <motion.p
        className="section-text"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        {`Have a project in mind? Let's build it`}
      </motion.p>
      <motion.form
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="contact-container">
          <motion.input
            type="text"
            placeholder="Enter your name"
            required
            name="name"
            className="contact-input"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          />
          <motion.input
            type="email"
            placeholder="Enter your email"
            required
            name="email"
            className="contact-input"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          />
        </div>
        <motion.textarea
          rows="6"
          placeholder="Enter your message"
          required
          name="message"
          className="contact-textarea"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        ></motion.textarea>
        <div className="box-transform ">
          <motion.button
            type="submit"
            disabled={result}
            className="contact-section-button"
            transition={{ duration: 0.3 }}
          >
            {result ? "Submitting..." : "Submit now"}
            {!result && (
              <Image src={assets.right_arrow_white} alt="" className="w-4" />
            )}
          </motion.button>
        </div>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
