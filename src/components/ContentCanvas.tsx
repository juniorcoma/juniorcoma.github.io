import { useEffect, useRef } from 'react';
import * as fabric from 'fabric'; // v6

export default function HomeCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  const createDots = (canvas: fabric.Canvas, width: number, height: number) => {
    const dotCount = 50;
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

  const createLine = (canvas: fabric.Canvas, dots: any[], dotsCount: number, index: number) => {
    const targetDot = dots[index];

    for (let i = 0; i < dotsCount; i++) {
      if (i !== index) {
        const dotsLength = Math.sqrt(
          Math.pow(targetDot.top - dots[i].top, 2) + Math.pow(targetDot.left - dots[i].left, 2),
        );
        if (dotsLength < 100) {
          const line = new fabric.Line(
            [
              targetDot.left + targetDot.radius, // 원의 중심 X좌표
              targetDot.top + targetDot.radius, // 원의 중심 Y좌표
              dots[i].left + dots[i].radius, // 다른 원의 중심 X좌표
              dots[i].top + dots[i].radius,
            ],
            {
              stroke: 'white',
              strokeWidth: 0.05,
              selectable: false,
              hasControls: false,
              evented: false,
            },
          );
          canvas.add(line);
        }
      }
    }
    if (index < dots.length - 1) {
      createLine(canvas, dots, dots.length, index + 1);
    }
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

      // 매 프레임마다 선을 지우고 다시 그리는 대신 선만 업데이트
      canvas.getObjects('line').forEach(line => canvas.remove(line)); // 선만 지움
      createLine(canvas, dots, dots.length, 0);

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

  return <canvas ref={ref} />;
}
