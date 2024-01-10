import React, { useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import images from "../../constants/images";
import "./Testimonial.scss";

const TestimonialData = [
  {
    Name: "Sarah",
    company: "Netflix",
    imgUrl: images.css,
    feedback:
      "Michael possesses outstanding web development skills, showcasing a mastery of various technologies. His proficiency extends to front-end frameworks like React, ensuring seamless user experiences. ",
  },
  {
    Name: "Aditya",
    company: "Google",
    imgUrl: images.html,
    feedback:
      "Michael possesses outstanding web development skills, showcasing a mastery of various technologies. His proficiency extends to front-end frameworks like React, ensuring seamless user experiences. ",
  },
];
const BrandData = [
  { Name: "New Balance", imgUrl: images.nb },
  { Name: "Spotify", imgUrl: images.spotify },
  { Name: "Skype", imgUrl: images.skype },
  { Name: "Bolt", imgUrl: images.bolt },
];
const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [brands, setBrands] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    setTestimonials(TestimonialData);
    setBrands(BrandData);
  }, []);

  // const test = testimonials[currentIndex]; // use for short form
  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img
              src={testimonials[currentIndex].imgUrl}
              alt={testimonials[currentIndex].Name}
            />
            <div className="app__testimonial-content">
              <p className="p-text">{testimonials[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">{testimonials[currentIndex].Name}</h4>
                <h5 className="p-text">{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>

            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={brand._id}
          >
            <img src={brand.imgUrl} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, "app__testimonial"),
  "testimonials",
  "app__primarybg"
);
