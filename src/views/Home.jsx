import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layer, Rect, Stage, Text } from 'react-konva';
import Blower from '../components/Blower';

function Home() {
  const [ph, setPh] = useState(0);
  const [orp, setOrp] = useState(0);
  const stageRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setPh(Math.floor(Math.random() * 10) + 1);
      setOrp(Math.floor(Math.random() * 100) + 1);
    }, 1000);
    return () => clearTimeout(timeoutId);
  });

  const handleClick = function (e) {
    navigate(`/stages/${e.target.attrs.slug}`);
  };

  const handleMouseEnter = function (e) {
    if (stageRef.current) {
      stageRef.current.container().style.cursor = 'pointer';
    }
  };

  const handleMouseLeave = function (e) {
    if (stageRef.current) {
      stageRef.current.container().style.cursor = 'default';
    }
  };

  return (
    <Stage
      className="stage"
      width={window.innerWidth / 2}
      height={window.innerHeight / 2}
      ref={stageRef}
    >
      <Layer>
        <Rect
          x={100}
          y={50}
          width={75}
          height={35}
          fill="white"
          cornerRadius={5}
        />
        <Text
          fill="#444"
          padding={20}
          fontSize={14}
          text={`ph: ${ph}`}
          x={100}
          y={40}
        />
        <Blower
          x={100}
          y={100}
          fill="white"
          stroke="black"
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          slug="reactor-1"
        />
        <Text fill="white" fontSize={18} text="Reactor 1" x={100} y={200} />
        <Rect x={176} y={130} width={430} height={10} fill="#005DB9" />
        <Rect
          x={600}
          y={50}
          width={75}
          height={35}
          fill="white"
          cornerRadius={5}
        />
        <Text
          fill="#444"
          padding={20}
          fontSize={14}
          text={`ORP: ${orp}`}
          x={590}
          y={40}
        />
        <Blower
          x={600}
          y={100}
          fill="white"
          stroke="black"
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          slug="descarga"
        />
        <Text fill="white" fontSize={18} text="Descarga" x={600} y={200} />
      </Layer>
    </Stage>
  );
}

export default Home;
