import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styled from 'styled-components';

gsap.registerPlugin(ScrollTrigger);

const DemoBox = styled.div`
  width: 200px;
  height: 200px;
  background: silver;
  margin: 500px auto; /* Enough margin for scrolling */
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Exo 2', sans-serif;
  color: #000;
`;

const GSAPDemo: React.FC = () => {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (boxRef.current) {
      gsap.to(boxRef.current, {
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
          markers: true, // Set to false when not debugging
        },
        x: 100,
        opacity: 0,
        duration: 2,
      });
    }
  }, []);

  return <DemoBox ref={boxRef}>Scroll to animate me!</DemoBox>;
};

export default GSAPDemo;
