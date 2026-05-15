"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({
    x: -100,
    y: -100,
  });

  const [hoverState, setHoverState] = useState("default"); // 'default', 'hover', 'view'

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('.cursor-view')) {
        setHoverState("view");
      } else if (
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.closest('[role="button"]')
      ) {
        setHoverState("hover");
      } else {
        setHoverState("default");
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
    },
    hover: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1.5,
    },
    view: {
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      scale: 1,
      width: 80,
      height: 80,
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      mixBlendMode: "normal",
      border: "none",
    }
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] flex items-center justify-center mix-blend-difference hidden md:flex overflow-hidden"
        variants={variants}
        animate={hoverState}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 40,
          mass: 0.1,
        }}
      >
        {hoverState !== "view" && (
          <div className="w-full h-full bg-white/20 border border-white/40 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
        )}
        <AnimatePresence>
          {hoverState === "view" && (
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="text-[10px] font-bold text-black uppercase tracking-widest"
            >
              View
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-white pointer-events-none z-[10000] mix-blend-difference hidden md:block"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          opacity: hoverState !== "default" ? 0 : 1,
        }}
        transition={{
          type: "tween",
          duration: 0
        }}
      />
    </>
  );
}

export default CustomCursor;
