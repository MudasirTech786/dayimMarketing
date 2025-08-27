"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import NavBar from "../components/Navbar";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import MainFooter from "../components/footer/MainFooter";
import Loader from "../components/loader/Loader";
import axios from "axios";

function Contact() {
  const b_t_animation = {
    hide: {
      opacity: 0,
      y: 300,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const searchParams = useSearchParams();
  const floor = searchParams.get("floor");
  const inventory_name = searchParams.get("inventory_name");
  const inventory_number = searchParams.get("inventory_number");

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    let newErrors = { name: "", email: "", phone: "", message: "" };

    if (!name) newErrors.name = "Name is required";
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) newErrors.email = "Email is required";
    else if (!emailPattern.test(email)) newErrors.email = "Email is not valid";
    if (!phone) newErrors.phone = "Phone is required";
    if (!message) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const contactHandler = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (!validateForm()) return;

    try {
      setLoading(true);
      const response = await axios.post(
        process.env.NEXT_PUBLIC_DSA_CONTACT_API,
        {
          name,
          email,
          contact: phone,
          message,
          inventory_number,
          inventory_name,
          floor,
        }
      );
      if (response.status === 200) {
        toast.success("Message Sent Successfully");
      } else {
        toast.error("Something went Wrong");
      }
    } catch (error) {
      toast.error("Something went Wrong");
    } finally {
      setLoading(false);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    }
  };

  return (
    <div>
      <NavBar videoBg={false} />
      <motion.section
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
        className="mt-[200px] w-full flex items-center justify-center"
      >
        <div className="flex flex-col w-[80%] gap-10 items-center lg:flex-row">
          <div className="w-[100%] px-3 md:px-10 lg:w-[70%]">
            <h3 className="text-6xl text-second font-bold">Contact</h3>
            <form className="w-full mt-20" onSubmit={contactHandler}>
              {loading && <Loader />}
              <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                <InputField
                  id="name"
                  label="Your full name"
                  value={name}
                  onChange={setName}
                  error={submitted ? errors.name : ""}
                />
                <InputField
                  id="email"
                  label="Email"
                  value={email}
                  onChange={setEmail}
                  error={submitted ? errors.email : ""}
                />
                <InputField
                  id="phone"
                  label="Phone Number"
                  value={phone}
                  onChange={setPhone}
                  error={submitted ? errors.phone : ""}
                  type="number"
                />
              </div>
              <div className="mt-10">
                <label
                  htmlFor="message"
                  className="text-lg font-semibold text-gray"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full text-second p-5 h-[200px] outline-none border border-gray focus:border-second"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                {submitted && (
                  <span className="text-red">{errors.message}</span>
                )}
              </div>
              <button
                type="submit"
                className="bg-second w-full text-white p-5 mt-10 hover:bg-third font-bold text-lg"
              >
                Submit
              </button>
            </form>
          </div>
          <ContactInfo />
        </div>
      </motion.section>
      <footer className="mt-20">
        <MainFooter />
      </footer>
    </div>
  );
}

const InputField = ({ id, label, value, onChange, error, type = "text" }) => (
  <div className="relative">
    <input
      type={type}
      id={id}
      className={`block px-2.5 pb-2.5 pt-5 w-full text-second text-xl border-0 border-b border-gray appearance-none focus:outline-none focus:ring-0 focus:border-second peer`}
      placeholder=" "
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
    <label
      htmlFor={id}
      className="absolute text-xl text-gray duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-second peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
    >
      {label}
    </label>
    {error && <span className="text-red">{error}</span>}
  </div>
);

const ContactInfo = () => (
  <div className="w-[90%] bg-fifth p-16 flex flex-col font-semibold text-lg lg:w-[30%]">
    <h3 className="font-bold text-lg">Head Office:</h3>
    <p className="text-sm">
      9-A, 1st/F Main Commercial, Al-Kabir Town Phase 2, Lahore
    </p>
    <p className="text-sm">+92-308-5111176</p>
    <Link
      href="https://goo.gl/maps/2eyWmxmZH1FS8bFg8"
      target="_blank"
      className="text-second underline hover:text-third"
    >
      view map
    </Link>
    <h3 className="font-bold text-lg mt-5">Project Site:</h3>
    <p className="text-sm">
      Plot 22 Block C, Commercial Area Al-Kabir Town, Raiwind Rd, Phase 2
      Lahore.
    </p>
    <Link
      href="https://goo.gl/maps/nukZwWqvtZKfJ3y5A"
      target="_blank"
      className="text-second underline hover:text-third"
    >
      view map
    </Link>
  </div>
);

export default Contact;
