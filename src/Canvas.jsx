import React, { useEffect, useRef, useState } from "react";
import canvaimages from "./canvaimages";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Canvas({ details }) {
  const [index, setIndex] = useState({ value: details.startIndex });
  const canvasRef = useRef(null);

  useGSAP(() => {
    gsap.to(index, {
      value: details.startIndex + details.numImages - 1,
      duration: details.duration,
      repeat: -1,
      ease: "linear",
      onUpdate: () => {
        const totalImages = canvaimages.length;
        const wrappedIndex = Math.round(index.value) % totalImages;
        setIndex({ value: wrappedIndex });
      },
    });
  }, [index]);

  useEffect(() => {
    const scale = window.devicePixelRatio;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const image = new Image();

    const safeIndex = Math.abs(index.value) % canvaimages.length;
    image.src = canvaimages[safeIndex];

    image.onerror = (e) => {
      console.error("Error loading image:", image.src, e);
    };

    image.onload = () => {
      canvas.width = canvas.offsetWidth * scale;
      canvas.height = canvas.offsetHeight * scale;
      canvas.style.width = canvas.offsetWidth + "px";
      canvas.style.height = canvas.offsetHeight + "px";
      ctx.scale(scale, scale);
      ctx.drawImage(image, 0, 0, canvas.offsetWidth, canvas.offsetHeight);
    };
  }, [index]);

  return (
    <canvas
      data-scroll
      data-scroll-speed={Math.random().toFixed(1)}
      ref={canvasRef}
      style={{
        width: `${details.size * 1.4}px`,
        height: `${details.size * 1.4}px`,
        top: `${details.top}%`,
        left: `${details.left}%`,
        zIndex: details.zIndex,
        position: "absolute",
      }}
    ></canvas>
  );
}

export default Canvas;
