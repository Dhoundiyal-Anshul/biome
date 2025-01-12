import React, { useEffect, useRef, useState } from "react";
import { haleImages, plankImages } from "./canvaimages";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Canvas({ details, imageSet = "hale" }) {
  const [index, setIndex] = useState({ value: 0 });
  const canvasRef = useRef(null);
  const images = imageSet === "hale" ? haleImages : plankImages;

  useEffect(() => {
    const loadAndDrawImage = async () => {
      const scale = window.devicePixelRatio;
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      const image = new Image();

      try {
        const safeIndex = Math.abs(Math.round(index.value)) % images.length;
        console.log("Loading image:", images[safeIndex]); // Debug log
        image.src = images[safeIndex];

        await new Promise((resolve, reject) => {
          image.onload = resolve;
          image.onerror = (e) => {
            console.error("Failed to load image:", images[safeIndex], e);
            reject(e);
          };
        });

        canvas.width = canvas.offsetWidth * scale;
        canvas.height = canvas.offsetHeight * scale;
        canvas.style.width = canvas.offsetWidth + "px";
        canvas.style.height = canvas.offsetHeight + "px";
        ctx.scale(scale, scale);
        ctx.drawImage(image, 0, 0, canvas.offsetWidth, canvas.offsetHeight);
      } catch (error) {
        console.error("Error in canvas:", error);
      }
    };

    loadAndDrawImage();
  }, [index, images]);

  useGSAP(() => {
    gsap.to(index, {
      value: images.length - 1,
      duration: details.duration,
      repeat: -1,
      ease: "linear",
      onUpdate: () => {
        const wrappedIndex = Math.round(index.value) % images.length;
        setIndex({ value: wrappedIndex });
      },
    });
  }, []);

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
