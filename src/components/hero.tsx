import { useState } from 'react';
import { motion } from 'framer-motion';
import useMousePosition from '../hooks/useMousePosition';

export default function Hero() {
  const [isHovered, setisHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 600 : 60;

  return (
    <main className='h-screen'>
      <motion.div
        className='w-full h-full flex items-center justify-center text-[#afa18f] text-6xl cursor-default mask'
        animate={{
          WebkitMaskPosition: `${x ? x - size / 2 : -500}px ${
            y ? y - size / 2 : -500
          }px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
      >
        <p
          className='w-[1000px] p-[40px]'
          onMouseEnter={() => setisHovered(true)}
          onMouseLeave={() => setisHovered(false)}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
          dignissimos esse quia consequuntur iste nobis eligendi velit.
          Aspernatur, voluptates rem.
        </p>
      </motion.div>
      <div className='w-full h-full flex items-center justify-center text-[#afa18f] text-6xl cursor-default'>
        <p className='w-[1000px] p-[40px]'>
          Here is some regular text I'm typing, not lorem. I need it to be
          different from the other stuff.
        </p>
      </div>
    </main>
  );
}
