import React, { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';

const FrontPage = () => {
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

  return (
    <>
    <div id="frontPage" className="w-full min-h-screen flex flex-col">
      <div className="relative w-full min-h-screen">
        <div className="w-full h-screen flex flex-col items-center justify-center">
          <h1 className="flex sm:text-3xl font-italic">
            <TypeAnimation
              sequence={[
                'Welcome',
                1000,
                'to',
                2000,
                'My Page',
                1000,
                ':)',
                2000,
                'Enjoy!', 
                () => {
                  console.log('jan');
                },
              ]}
              wrapper="div"
              cursor={true}
              repeat={true}
              style={{ fontSize: '2em', paddingLeft: '5px', color: 'orange' }}
            />
          </h1>
          <div className="mt-4 flex justify-center pt-5 max-w-[200] w-full gap-10 ">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="cursor-pointer" size={30} color="orange" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <BsGithub className="cursor-pointer" size={30} color="orange" />
            </a>
          </div>
        </div>
        <div className="w-full min-h-screen flex items-center justify-end pt-16">
          <div
            className={`bg-transparent p-6 transform transition-all duration-1000 ${
              scrollPosition > 400 ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
            }`}
            style={{ maxWidth: '500px', marginRight: '100px', color: 'orange'}}
          >
            <h2 className="text-2xl font-bold mb-4 text-orange-400">About Us</h2>
            <p className="text-orange-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.
              Vivamus hendrerit arcu sed erat molestie vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className="w-full min-h-fit flex items-center justify-end pt-0 pb-56">
          <div
            className={`bg-transparent p-6 transform transition-all duration-1000 ${
              scrollPosition > 900 ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
            }`}
            style={{ maxWidth: '500px', marginRight: '800px' }}
          >
            <h2 className="text-2xl font-bold mb-4 text-orange-400">Our Mission</h2>
            <p className="text-orange-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.
              Vivamus hendrerit arcu sed erat molestie vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        #frontPage::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url('https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
          background-size: cover;
          background-position: center bottom;
          opacity: ${backgroundOpacity};
          transition: opacity 0.5s ease-out;
          z-index: -2;
        }
        #frontPage::after {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #3db6b7 10%,#1d6675 50%);
          opacity: ${1 - backgroundOpacity};
          transition: opacity 0.5s ease-out;
          z-index: -1;
        }
      `}</style>
    </div>
    <footer className='text-center text-orange-400'>
      <p>© 2024 Built with love and Coffee.</p>
    </footer>
    </>
  );
};

export default FrontPage;