import React, { useEffect , useState} from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';

const AnimatedArrow = () => {
    const controls = useAnimation();
    const [scrollPosition, setScrollPosition] = useState(0);
    const [backgroundOpacity, setBackgroundOpacity] = useState(1);

    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
      
      // Calculate opacity based on scroll position
      const maxScroll = 500; // Adjust this value to control when the transition completes
      const newOpacity = Math.max(0, 1 - (position / maxScroll));
      setBackgroundOpacity(newOpacity);
    };

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    
    useEffect(() => {
      const animateArrow = async (repeatCount = 4) => {
        for (let i = 0; i < repeatCount; i++) {
          await new Promise(resolve => setTimeout(resolve, 5000)); // Wait 2 seconds
          await controls.start({ opacity: 5 });
          for (let j = 0; j < 4; j++) {
            await controls.start({ y: 270 });
            await controls.start({ y: 280 });
          }
          await controls.start({ opacity: 0 });
        }
      };
        animateArrow();
    }, [controls]);

    return (
      <motion.div
        initial={{ opacity: 0, y: 280 }}
        animate={controls}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center"
      >
        <div
          className={`bg-transparent p-6 flex flex-col items-center transition-all duration-1000 ${
            scrollPosition < 200 ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
          style={{ color: 'orange', marginTop: '-5%' }}
        >
          <ArrowDown size={36} color="orange" className="mb-2" />
          <p className="text-2xl font-bold text-orange-300 whitespace-nowrap">read more</p>
        </div>
      </motion.div>
    );
    };

    export default AnimatedArrow;