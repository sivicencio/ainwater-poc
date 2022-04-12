import { Image } from 'react-konva';
import useImage from 'use-image';
import blower from '../blower.svg';

function Blower({ scaleX, scaleY, ...rest}) {
  const [image] = useImage(blower);

  

  return (
    <Image
      {...rest}
      image={image}
      scaleX={scaleX || 0.5}
      scaleY={scaleY || 0.5}
    />
  );
}

export default Blower;
