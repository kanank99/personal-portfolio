import React from "react";
import { useEffect } from "react";
// import styled from "styled-components";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function AnimatedTitle(props) {
  //   const Title = styled.h2`
  //     font-size: 3rem;
  //     font-weight: 600;
  //   `;

  //   const Word = styled(motion.span)`
  //     display: inline-block;
  //     margin-right: 0.25em;
  //     white-space: nowrap;
  //   `;

  //   const Character = styled(motion.span)`
  //     display: inline-block;
  //     margin-right: -0.05em;
  //   `;

  const text = props.text;
  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: props.threshold || 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    }
    if (!inView) {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);

  const wordAnimation = {
    hidden: {},
    visible: {},
  };

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: props.duration || 0.5,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };
  return (
    <div
      className={`${props.color} z-50 text-4xl md:text-6xl lg:text-7xl font-extrabold whitespace-nowrap`}
      aria-label={text}
      role="heading"
      aria-level={1}
    >
      {text.split(" ").map((word, index) => {
        return (
          <motion.span
            className="inline-block mr-[0.25em] whitespace-nowrap"
            ref={ref}
            aria-hidden="true"
            key={index}
            initial="hidden"
            animate={ctrls}
            variants={wordAnimation}
            transition={{
              delayChildren: index * 0.25,
              staggerChildren: 0.05,
            }}
          >
            {word.split("").map((character, index) => {
              return (
                <motion.span
                  aria-hidden="true"
                  key={index}
                  variants={characterAnimation}
                >
                  {character}
                </motion.span>
              );
            })}
          </motion.span>
        );
      })}
    </div>
  );
}

export default AnimatedTitle;
