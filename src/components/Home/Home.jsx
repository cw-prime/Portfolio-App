import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./Home.css";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  const imageVariants = {
    hover: {
      scale: 1.2,
      transition: { duration: 0.3 },
    },
  };

  const smoothScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const navLinks = document.querySelectorAll(".navbar a");
    navLinks.forEach((link) => {
      const targetId = link.getAttribute("href").substring(1);
      link.addEventListener("click", (e) => {
        e.preventDefault();
        smoothScroll(targetId);
      });
    });
  }, []);

  return (
    <div>
      <section id="hero" className="hero">
        {/* Add image for the hero section */}
        <img src="/assets/mark.jpg" alt="Hero Image" />
        <h1>Welcome to My Portfolio</h1>
        <p>I am a passionate web developer showcasing my work here.</p>
      </section>

      <section id="about" className="about">
        {/* Add image for the about section */}
        <h2>About Me</h2>
        <div className="home-container">
          <div className="main-content">
            <p>
              Welcome! I'm Mark Alan, a seasoned web developer with a passion
              for creating innovative and interactive web applications.
            </p>
            <p>
              My journey in web development has equipped me with a robust skill
              set and a comprehensive understanding of the latest technologies.
              I thrive on tackling complex challenges and transforming ideas
              into reality.
            </p>
            <p>
              My commitment to excellence extends to every project I undertake.
              Whether it's crafting a user-friendly interface, optimizing
              performance, or implementing cutting-edge features, I approach
              each task with precision and creativity.
            </p>
          </div>
        </div>
      </section>

      <section id="experience" className="experience">
        <h2>Professional Experience</h2>
        <div id="experience-container" className="experience-container">
          <div className="marquee-container">
            <img
              src="/assets/charter_spectrum_logo.png"
              alt="Charter Spectrum Logo"
            />
            <img
              src="/assets/suntrust_bank_logo.png"
              alt="Suntrust Bank Logo"
            />
            <img src="/assets/wellsfargo_logo.png" alt="Wells Fargo Logo" />
            <img src="/assets/webmd_logo.png" alt="WebMD Logo" />
            <img src="/assets/att_mobility_logo.png" alt="AT&T Mobility Logo" />
            <img src="/assets/statefarm_logo.png" alt="StateFarm Logo" />

            {/* Duplicate the images for a seamless loop */}
            <img
              src="/assets/charter_spectrum_logo.png"
              alt="Charter Spectrum Logo"
            />

            <img
              src="/assets/suntrust_bank_logo.png"
              alt="Suntrust Bank Logo"
            />
            <img src="/assets/statefarm_logo.png" alt="StateFarm Logo" />
            <img src="/assets/webmd_logo.png" alt="WebMD Logo" />
            <img src="/assets/att_mobility_logo.png" alt="AT&T Mobility Logo" />

            <img src="/assets/wellsfargo_logo.png" alt="Wells Fargo Logo" />

            {/* Duplicate the images for a seamless loop */}
            <img
              src="/assets/charter_spectrum_logo.png"
              alt="Charter Spectrum Logo"
            />

            <img
              src="/assets/suntrust_bank_logo.png"
              alt="Suntrust Bank Logo"
            />
            <img src="/assets/statefarm_logo.png" alt="StateFarm Logo" />
            <img src="/assets/webmd_logo.png" alt="WebMD Logo" />
            <img src="/assets/att_mobility_logo.png" alt="AT&T Mobility Logo" />

            <img src="/assets/wellsfargo_logo.png" alt="Wells Fargo Logo" />
          </div>
        </div>
      </section>

      <h2>Skills</h2>
      <section id="skills" className="skills">
        {/* Apply motion hover effect to each image */}
        <motion.img
          variants={imageVariants}
          whileHover="hover"
          src="/assets/html.png"
          alt="HTML5 Logo"
        />
        <motion.img
          variants={imageVariants}
          whileHover="hover"
          src="/assets/css.png"
          alt="CSS3 Logo"
        />
        <motion.img
          variants={imageVariants}
          whileHover="hover"
          src="/assets/javascript.png"
          alt="JavaScript Logo"
        />
        <motion.img
          variants={imageVariants}
          whileHover="hover"
          src="/assets/react.png"
          alt="React Logo"
        />
        <motion.img
          variants={imageVariants}
          whileHover="hover"
          src="/assets/node.png"
          alt="Node.js Logo"
        />
        {/* Add more images for other skills */}
      </section>

      <section id="portfolio" className="portfolio">
        {/* Portfolio section with image thumbnails */}
        <h2>Portfolio</h2>
        <div className="portfolio-grid">
          <div className="portfolio-item">
            <img src="/assets/project1.jpg" alt="Project 1" />
            <p>Project 1</p>
          </div>
          <div className="portfolio-item">
            <img src="/assets/project2.jpg" alt="Project 2" />
            <p>Project 2</p>
          </div>
          {/* Add more portfolio items as needed */}
          <div className="portfolio-item">
            <img src="/assets/project3.jpg" alt="Project 3" />
            <p>Project 3</p>
          </div>
          <div className="portfolio-item">
            <img src="/assets/project4.jpg" alt="Project 4" />
            <p>Project 4</p>
          </div>
          <div className="portfolio-item">
            <img src="/assets/project5.jpg" alt="Project 5" />
            <p>Project 5</p>
          </div>
          <div className="portfolio-item">
            <img src="/assets/project6.jpg" alt="Project 6" />
            <p>Project 6</p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        {/* Add image for the contact section */}
        <h2>Contact Me</h2>
        <p>
          Let's work together! Feel free to reach out through the contact form
          below.
        </p>
        {/* Add a contact form or other contact information */}
      </section>
    </div>
  );
};

export default Home;
