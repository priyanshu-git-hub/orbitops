'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Space Madness" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Space Madness</span> is a new
        thing in the future, where you can  Experience the thrill of space exploration with Space Madness. We offer {' '}
        <span className="font-extrabold text-white">
          unforgettable journeys to the stars
        </span>{' '}
        providing you with a unique opportunity to witness the wonders of the universe firsthand. From {' '}
        <span className="font-extrabold text-white">breathtaking views of Earth to encounters with celestial bodies,</span>
        our space tours are designed to exceed your expectations. Let's{' '}
        <span className="font-extrabold text-white">explore</span> the madness
        of the SPACE by scrolling down
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
