import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FiFacebook, FiTwitter, FiGithub } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_asprdho",
        "template_dxro7g7",
        form.current,
        "user_5nGXzmFcNT2D1HhfEKSGU"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message Succesfully sent!");
        },
        (error) => {
          console.log(error.text);
          toast.error("Unsuccessful!");
        }
      );
  };

  return (
    <div className="min-h-screen h-auto max-w-[800px] mx-auto flex flex-col justify-center snap-start relative">
      <motion.h2
        whileInView={{ opacity: [0, 1], y: [-20, 0] }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center text-[2.5rem] font-bold "
      >
        CONTACT ME
      </motion.h2>
      <div className="flex justify-center">
        <motion.form
          whileInView={{ opacity: [0, 1], y: [300, 0] }}
          transition={{ duration: 1, delay: 0.5 }}
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col w-full px-4 sm:px-12 lg:px-0"
        >
          <label>NAME</label>
          <input
            className=" p-2 border-[1px] border-gray rounded focus:border-black focus:border-[1px] transition-all duration-500 mb-8"
            type="text"
            name="user_name"
          />
          <label>EMAIL</label>
          <input
            className=" p-2 border-[1px] border-gray rounded focus:border-black focus:border-[1px] transition-all duration-500 mb-8"
            type="email"
            name="user_email"
          />
          <label>MESSAGE</label>
          <textarea
            className=" p-2 border-[1px] border-gray rounded focus:border-black focus:border-[1px] transition-all duration-500 mb-8"
            name="message"
          />
          <input
            type="submit"
            value="SEND MESSAGE"
            className="border-[1px] border-gray hover:bg-[#2C3333] hover:text-white cursor-pointer transition-color duration-200 ease-in p-2 "
          />
        </motion.form>
      </div>

      <motion.div
        whileInView={{ x: [300, 0], opacity: [0, 1] }}
        transition={{ duration: 1, delay: 1 }}
        className="w-full md:w-1/2 px-4 flex justify-between items-center text-[3rem] text=[#2C3333] py-4 sm:px-12 lg:px-0"
      >
        <FiFacebook />
        <FiTwitter />
        <FiGithub />
        <AiOutlineLinkedin />
      </motion.div>
      <motion.div
        whileInView={{ x: [300, 0], opacity: [0, 1] }}
        transition={{ duration: 1, delay: 1.2 }}
        className="px-4 text-[0.8rem] sm:text-[1.1rem] w-full lg:w-1/2 sm:px-12 lg:px-0"
      >
        <p> Address: Sultan Kudarat, Philippines</p>
        <p> Email: Adamjaspher04@gmail.com</p>
        <p> Mobile: 09154818159</p>
      </motion.div>
      <Toaster position="top-center" />
    </div>
  );
};
export default Contact;
