import React from 'react';
// Avatar
import Avatar from '../assets/Avatar';
// icons
import { FaGithub, FaYoutube, FaDribbble } from 'react-icons/fa';
// type animation
import { TypeAnimation } from 'react-type-animation';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';


const Banner = () => {
  return (
  <section id='home' className='min-h-[85vh] lg:min-h-[78vh] flex items-center'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center'>
        {/* text */}
        <div className='flex-1 text-center font-secondary lg:text-left'>
          <motion.h1 
            variants={fadeIn('up', 0.3)} 
            initial='hidden' 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}} 
            className='text-[42px] font-bold leading-[0.8] lg:text-[60px]'
          >ALEXANDAR <span>BELIĆ</span>
          </motion.h1>
          <motion.div
            variants={fadeIn('up', 0.5)} 
            initial='hidden' 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}}
            className='mb-6 text-[20px] lg:text-[40px] font-secondary font-semibold uppercase leading-[1]'
          >
            <span className='text-white mr-4'>I am a</span>
            <TypeAnimation sequence={[
              'Graphic Designer',
              2000,
              'WordPress Developer',
              2000,
              'React Developer',
              2000,
            ]}
            speed={50}
            className='text-accent'
            wrapper='span'
            repeat={Infinity}
            />
            
          </motion.div>
          <motion.p
            variants={fadeIn('up', 0.7)} 
            initial='hidden' 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}}
            className='mb-8 max-w-lg mx-auto lg:mx-0'
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </motion.p>
          <motion.div
            variants={fadeIn('up', 0.9)} 
            initial='hidden' 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}}
            className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'
          >
            <button className='btn btn-lg'>Contact me</button>
            <a href='#' className='text-gradient btn-link'>My Portfolio</a>
          </motion.div>
          {/* socials */}
          <motion.div
            variants={fadeIn('up', 1.1)} 
            initial='hidden' 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}}
            className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'
          >
            <a href="#">
              <FaYoutube />
            </a>
            <a href="#">
              <FaGithub />
            </a>
            <a href="#">
              <FaDribbble />
            </a>
          </motion.div>
        </div>
        {/* image */}
        <motion.div
          variants={fadeIn('down', 0.5)} 
          initial='hidden' 
          whileInView={'show'}           
          className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  </section>
  )
};

export default Banner;
