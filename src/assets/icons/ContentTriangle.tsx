import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface ContentTriangleProps {
  setLinkState: React.Dispatch<React.SetStateAction<boolean | number>>;
}

export default function ContentTriangle({ setLinkState }: ContentTriangleProps) {
  const pathRef = useRef<SVGPathElement | null>(null);
  const [hoverIndex, setHoverIndex] = useState<boolean | number>(false);
  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      pathRef.current.style.strokeDasharray = `${length}`;
      pathRef.current.style.strokeDashoffset = `${length}`;
      pathRef.current.style.transition = 'stroke-dashoffset 1s ease';
      pathRef.current.style.boxShadow = '5px 5px 15px #fff';
    }
  }, []);
  const handleMouseEnter = (index: number) => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      let offset = 0;

      if (index === 1) {
        offset = (length / 3) * 2;
      } else if (index === 2) {
        offset = length / 3;
      }
      pathRef.current.style.strokeDashoffset = `${offset}`;
    }
    setHoverIndex(index);
    setLinkState(index + 1);
  };

  const handleMouseLeave = () => {
    if (pathRef.current) {
      pathRef.current.style.strokeDashoffset = `${pathRef.current.getTotalLength()}`;
    }
    setHoverIndex(false);
    setLinkState(false);
  };

  return (
    <Svg width="600" height="610" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M300 19L557.21 464.5H42.7905L300 19Z" stroke="#8D8D8D" strokeWidth="3" />

      <path ref={pathRef} d="M300 19L557.21 464.5H42.7905L300 19Z" stroke="#fff" strokeWidth="3" />
      <Link to={'/about'} onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={handleMouseLeave}>
        <circle
          cx="300"
          cy="16"
          r="15.5"
          fill={hoverIndex === 0 ? '#fff' : `#1f1f1f`}
          stroke={hoverIndex === 0 ? '#fff' : `#8D8D8D`}
          strokeWidth="3"
        />
        <Text x="350" y="16" textAnchor="middle" fill="white">
          ABOUT
        </Text>
      </Link>

      <Link to={'/project'} onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave}>
        <circle
          cx="559"
          cy="466"
          r="15.5"
          fill={hoverIndex === 1 ? '#fff' : `#1f1f1f`}
          stroke={hoverIndex === 1 ? '#fff' : `#8D8D8D`}
          strokeWidth="3"
        />
        <Text x="559" y="505" textAnchor="middle" fill="white">
          PROJECT
        </Text>
      </Link>
      <Link to={'/contact'} onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave}>
        <circle
          cx="41"
          cy="466"
          r="15.5"
          fill={hoverIndex === 2 ? '#fff' : `#1f1f1f`}
          stroke={hoverIndex === 2 ? '#fff' : `#8D8D8D`}
          strokeWidth="3"
        />
        <Text x="41" y="505" textAnchor="middle" fill="white">
          CONTACT
        </Text>
      </Link>
    </Svg>
  );
}

const Svg = styled.svg`
  z-index: 1000000;
`;

const Text = styled.text`
  font-size: 16px;
`;
