import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';

const AnimatedArrow = () => {
    const controls = useAnimation();

    useEffect(() => {
        const animateArrow = async () => {
        await new Promise(resolve => setTimeout(resolve, 5000)); // Warte 2 Sekunden
        await controls.start({ opacity: 5 });
        await controls.start({ y: 210 }); 
        await controls.start({ y: 220 });
        await controls.start({ y: 210 });
        await controls.start({ y: 220 });
        await controls.start({ y: 210 }); 
        await controls.start({ y: 220 });
        await controls.start({ y: 210 });
        await controls.start({ y: 220 });


        await controls.start({ opacity: 0 });
        

        };
        animateArrow();
    }, [controls]);

    return (
        <motion.div
          initial={{ opacity: 0, y: 220 }}
          animate={controls}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center"
        >
          <div className="mb-2">
            <ArrowDown size={36} color="orange" />
          </div>
          <div>
            <p className="text-2xl font-bold text-orange-300">Scroll down</p>
          </div>
        </motion.div>
      );
    };

    export default AnimatedArrow;