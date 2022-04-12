import { useParams } from 'react-router-dom';

function Detail() {
  const { slug } = useParams();

  return <h1>{slug.replace('-', ' ').toUpperCase()}</h1>;
}

export default Detail;
