import { motion, useSpring, useTransform, useViewportScroll } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function ReadAnimation() {
  const { scrollYProgress } = useViewportScroll()
  const [isComplete, setIsComplete] = useState(false)
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1])
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 })

  useEffect(() => yRange.onChange(v => setIsComplete(v >= 1)), [yRange])

  return (
    <ReaderCounter>
      <svg className="c-reader_animation" viewBox="0 0 60 60" width="100">
        <defs>
          <linearGradient id="gradient" y1="0" y2="1">
            <stop offset="0" stop-color="rgb(0,224,255,1)" />
            <stop offset="1" stop-color="rgb(0,71,255,1)" />
          </linearGradient>
        </defs>
        <motion.path
          fill="none"
          strokeWidth="3"
          stroke="url(#gradient)"
          strokeDasharray="0 1"
          d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
          style={{
            pathLength,
            rotate: 90,
            translateX: 5,
            translateY: 5,
            scaleX: -1, // Reverse direction of line animation
          }}
        />
        <motion.path
          fill="none"
          strokeWidth="3"
          stroke="url(#gradient)"
          d="M14,26 L 22,33 L 35,16"
          initial={false}
          strokeDasharray="0 1"
          animate={{ pathLength: isComplete ? 1 : 0 }}
        />
      </svg>
    </ReaderCounter>
  )
}

const ReaderCounter = styled.div`
  display: none;
  transition: all 0.4s ease;

  .c-reader_animation {
    position: fixed;
    top: 40px;
    left: 5%;
  }

  @media (min-width: 1080px) {
    display: block;
  }

  @media (min-width: 1520px) {
    .c-reader_animation {
      left: 10%;
    }
  }

  @media (min-width: 2000px) {
    .c-reader_animation {
      left: 15%;
    }
  }
`

export { ReadAnimation }
