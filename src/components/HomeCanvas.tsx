import { useEffect, useRef } from 'react';
import * as fabric from 'fabric'; // v6
import styled from 'styled-components';

interface CanvasProps {
  setTextVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function HomeCanvas({ setTextVisible }: CanvasProps) {
  const ref = useRef<HTMLCanvasElement>(null);
  let selectedCircle: any = null; // 선택된 원을 추적
  let currentLine: fabric.Line | null = null; // 마우스와 연결된 선을 저장
  const connectionLines: fabric.Line[] = []; // 두 점 사이의 연결된 선들을 저장

  const createStars = (canvas: fabric.Canvas, width: number, height: number) => {
    const dotCount = 3;
    const dots = Array.from({ length: dotCount }, (_, index) => {
      const dot = new fabric.Circle({
        left: Math.random() * width + 20,
        top: Math.random() * height + 10,
        radius: Math.random() * 5 + 10, // 점의 크기
        fill: 'rgba(255,255,255,0.5)', // 점의 색상
        selectable: false, // 선택 가능
        hasBorders: false, // 테두리 제거
        hasControls: false, // 컨트롤 제거
        hoverCursor: 'pointer',
        lineCount: 0,
        id: index + 1,
      });
      return dot;
    });

    dots.forEach(star => canvas.add(star)); // 캔버스에 점 추가
    return dots;
  };

  const animateDots = (canvas: fabric.Canvas, dots: fabric.Circle[], width: number, height: number, speedArr: any) => {
    fabric.util.requestAnimFrame(function animate() {
      dots.forEach((dot, index) => {
        dot.left += speedArr[index][0];
        dot.top += speedArr[index][1];

        // 경계에 부딪히면 방향 반전
        if (dot.left >= width - dot.width || dot.left <= 0) {
          speedArr[index][0] *= -1;
        }
        if (dot.top >= height - dot.height || dot.top <= 0) {
          speedArr[index][1] *= -1;
        }

        dot.setCoords(); // 좌표 갱신
      });

      // 점 사이의 선 업데이트
      connectionLines.forEach((line: any) => {
        const startCircle = line.startCircle;
        const endCircle = line.endCircle;

        line.set({
          x1: startCircle.width / 2 + startCircle.left,
          y1: startCircle.height / 2 + startCircle.top,
          x2: endCircle.width / 2 + endCircle.left,
          y2: endCircle.height / 2 + endCircle.top,
        });
      });

      canvas.renderAll(); // 모든 객체 다시 그리기
      fabric.util.requestAnimFrame(animate); // 다음 프레임 요청
    });
  };

  useEffect(() => {
    if (ref.current && window.innerWidth > 1080) {
      document.body.style.overflow = 'hidden';
      const canvas = new fabric.Canvas(ref.current, {
        width: window.innerWidth,
        height: window.innerHeight,
        selection: false,
      });

      const width = window.innerWidth;
      const height = window.innerHeight;

      const dots = createStars(canvas, width, height); // 점 생성
      const speed = Array.from({ length: dots.length }).map(_ => [
        (Math.random() - 0.2) * 2,
        (Math.random() - 0.3) * 2,
      ]);
      animateDots(canvas, dots, width, height, speed); // 애니메이션 시작

      canvas.on('mouse:over', function (options) {
        if (options.target && options.target.type === 'circle') {
          options.target.set('fill', 'white');
          options.target.set('shadow', { color: 'white', blur: 15, offsetX: 0, offsetY: 0 });
          canvas.renderAll();
        }
      });

      // 마우스 다운 이벤트 핸들러 (선택된 점과 마우스 연결)
      canvas.on('mouse:down', function (options: any) {
        if (options.target && options.target.type === 'circle') {
          selectedCircle = options.target as fabric.Circle;

          // 마우스와 연결된 선 생성
          currentLine = new fabric.Line(
            [selectedCircle.left, selectedCircle.top, options.e.clientX, options.e.clientY],
            {
              stroke: 'white',
              strokeWidth: 2,
              selectable: false,
              hoverCursor: 'auto',
              hasControls: false,
            },
          );
          canvas.add(currentLine);
        }
      });

      // 마우스 이동 이벤트 핸들러 (마우스와 연결된 선 업데이트)
      canvas.on('mouse:move', function (options: any) {
        if (currentLine && selectedCircle) {
          currentLine.set({
            x1: selectedCircle.width / 2 + selectedCircle.left,
            y1: selectedCircle.height / 2 + selectedCircle.top,
            x2: options.e.clientX,
            y2: options.e.clientY,
          });
          canvas.renderAll();
        }
      });

      // 마우스 업 이벤트 핸들러
      canvas.on('mouse:up', function (options) {
        if (!options.target) {
          selectedCircle?.set('fill', 'rgba(255,255,255,0.5)');
          selectedCircle?.set('shadow', null);
        }
        if (selectedCircle && options.target && options.target.type === 'circle') {
          const targetCircle = options.target as any;

          // 선택된 점과 다른 점이라면 선을 그린다.
          if (targetCircle !== selectedCircle) {
            selectedCircle.lineCount += 1;
            targetCircle.lineCount += 1;
            const allConnect = dots.every((dot: any) => dot.lineCount >= 2);
            if (allConnect) {
              setTextVisible(true);
            }
            const line: any = new fabric.Line(
              [
                selectedCircle.width / 2 + selectedCircle.left,
                selectedCircle.height / 2 + selectedCircle.top,
                targetCircle.width / 2 + targetCircle.left,
                targetCircle.height / 2 + targetCircle.top,
              ],
              {
                stroke: 'white',
                strokeWidth: 2,
                selectable: false,
                hasControls: false,
                evented: false,
              },
            );

            // 각 선에 시작 원과 끝 원 저장
            line.startCircle = selectedCircle;
            line.endCircle = targetCircle;

            connectionLines.push(line);
            canvas.add(line);
          }
        }

        // 마우스와 연결된 선 제거
        if (currentLine) {
          canvas.remove(currentLine);
          currentLine = null;
        }

        selectedCircle = null;
      });

      return () => {
        canvas.dispose();
        document.body.style.overflow = 'auto';
      };
    }
  }, []);

  return <Canvas ref={ref} />;
}

const Canvas = styled.canvas`
  @media (max-width: 1080px) {
    display: none;
  }
`;
