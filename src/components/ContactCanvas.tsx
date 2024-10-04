import { useEffect, useRef } from 'react';
import * as fabric from 'fabric'; // v6
export default function ContactCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  const createDots = (canvas: fabric.Canvas, width: number, height: number) => {
    const dotCount = 200;
    const dotsArr = Array.from({ length: dotCount }, () => {
      return new fabric.Circle({
        left: Math.random() * width,
        top: Math.random() * height,
        radius: Math.random() + 0.5,
        selectable: false,
        fill: `rgba(255,255,255)`,
        hoverCursor: 'auto',
        hasControls: false,
        opacity: Math.random(),
        opacitySpeed: Math.random() * 0.005 + 0.003,
        dx: (Math.random() - 0.5) * 1,
        dy: (Math.random() - 0.5) * 1,
      });
    });

    dotsArr.forEach(dot => {
      canvas.add(dot);
    });
    return dotsArr;
  };

  const animateDots = (canvas: fabric.Canvas, dots: any[], width: number, height: number) => {
    fabric.util.requestAnimFrame(function animate() {
      dots.forEach(dot => {
        dot.left += dot.dx;
        dot.top += dot.dy;
        dot.opacity += dot.opacitySpeed;
        if (dot.opacity >= 0.95 || dot.opacity <= 0.05) {
          dot.opacitySpeed *= -1;
        }
        dot.opacity = Math.min(Math.max(dot.opacity, 0.05), 0.95);

        if (dot.left >= width - dot.width || dot.left <= 0) {
          dot.dx *= -1;
        }
        if (dot.top >= height - dot.height || dot.top <= 0) {
          dot.dy *= -1;
        }

        dot.setCoords();
      });

      canvas.renderAll();
      fabric.util.requestAnimFrame(animate);
    });
  };

  useEffect(() => {
    if (ref.current) {
      document.body.style.overflow = 'hidden';
      const canvas = new fabric.Canvas(ref.current, {
        width: window.innerWidth,
        height: window.innerHeight,
        selection: false,
      });

      const dots = createDots(canvas, window.innerWidth, window.innerHeight);
      animateDots(canvas, dots, window.innerWidth, window.innerHeight);

      return () => {
        canvas.dispose();
        document.body.style.overflow = 'auto';
      };
    }
  }, []);
  return <canvas ref={ref}></canvas>;
}
