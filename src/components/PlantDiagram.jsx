import { useNavigate } from 'react-router-dom'
import { ReactComponent as TraiguenPlant } from '../planta-traiguen.svg';

const ORIGINAL_PLANT_SIZE = {
  width: 1222,
  height: 686,
};

const COORDINATES_IN_PROPORTIONS = [
  {
    slug: 'reactor-1',
    startX: 425 / ORIGINAL_PLANT_SIZE.width,
    startY: 60 / ORIGINAL_PLANT_SIZE.height,
    endX: 600 / ORIGINAL_PLANT_SIZE.width,
    endY: 160 / ORIGINAL_PLANT_SIZE.height,
  },
  {
    slug: 'descarga',
    startX: 1106 / ORIGINAL_PLANT_SIZE.width,
    startY: 266 / ORIGINAL_PLANT_SIZE.height,
    endX: 1200 / ORIGINAL_PLANT_SIZE.width,
    endY: 436 / ORIGINAL_PLANT_SIZE.height,
  },
];

function PlantDiagram() {
  const navigate = useNavigate();

  const handleClick = function (event) {
    const { offsetX, offsetY } = event.nativeEvent;
    const { height, width } = event.currentTarget.getBoundingClientRect();

    COORDINATES_IN_PROPORTIONS.forEach((coordinate) => {
      if (
        coordinate.startX * width < offsetX &&
        offsetX < coordinate.endX * width &&
        coordinate.startY * height < offsetY &&
        offsetY < coordinate.endY * height
      ) {
        navigate(`/stages/${coordinate.slug}`);
      }
    });
  };

  return (
    <TraiguenPlant
      title="Plant diagram"
      className="plant-diagram"
      onClick={handleClick}
    />
  );
}

export default PlantDiagram;
