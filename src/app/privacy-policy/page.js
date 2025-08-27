"use client";

import { motion } from "framer-motion";

import Link from "next/link";

import NavBar from "../dmComponents/Navbar";
import MainFooter from "../dmComponents/footer/MainFooter";

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

  return (
    <div>
      <NavBar videoBg={false} />

      <section className="my-[50px] mt-[150px] px-5 md:px-32 ">
        <h2 className="text-center font-bold text-4xl my-7">Privacy Policy</h2>
        Your privacy matters to us. This Privacy Policy explains how we collect,
        use, share, and protect your personal information on our real estate
        website.
        <br />
        <br />
        Information We Collect: When you use our website, we may collect certain
        information to provide you with our services, such as your name, contact
        details, property preferences, and any other information you choose to
        provide.
        <br />
        <br />
        How We Use Your Information: We use the information we collect to help
        you find properties that match your preferences, communicate with you
        about your inquiries, and improve our services. We may also use your
        information for marketing purposes with your consent.
        <br />
        <br />
        Sharing Your Information: We may share your information with third
        parties such as real estate agents, property developers, or service
        providers who help us deliver our services to you. We will only share
        your information when necessary and with your consent.
        <br />
        <br />
        Data Security: We take the security of your personal information
        seriously and have measures in place to protect it from unauthorized
        access, disclosure, alteration, or destruction.
        <br />
        <br />
        Your Choices: You have the right to access, update, or delete the
        personal information we hold about you. You can also choose to opt-out
        of receiving marketing communications from us at any time.
        <br />
        <br />
        Cookies and Tracking Technologies: We may use cookies and similar
        tracking technologies to enhance your experience on our website and
        collect information about how you use it. You can manage your cookie
        preferences through your browser settings.
        <br />
        <br />
        Childrens Privacy: Our website is not intended for children under the
        age of 18, and we do not knowingly collect personal information from
        minors.
        <br />
        <br />
        Changes to This Policy: We may update this Privacy Policy from time to
        time to reflect changes in our practices or legal requirements. We will
        notify you of any significant changes by posting the updated policy on
        our website.
        <br />
        <br />
        Contact Us: If you have any questions or concerns about our Privacy
        Policy or how we handle your personal information, please contact us.
        <br />
        <br />
        By using our website, you consent to the collection and use of your
        personal information as described in this Privacy Policy.
        <br />
        <br />
        Thank you for trusting us with your information.
      </section>

      <footer className="mt-20">
        <MainFooter />
      </footer>
    </div>
  );
}

export default Contact;
