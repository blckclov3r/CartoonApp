

import { Row } from 'react-bootstrap';
import { useQuery } from 'react-query';
import CardView from './CardView';

export default function Character() {



  const fetchData = async () =>{
      const response = await fetch('https://api.sampleapis.com/cartoons/cartoons2D');
      return response.json();
  }

  const {data} = useQuery("cartoons",fetchData);


  return (
    <Row className='mx-auto'>
          {data && data.map((item)=>(
              <CardView {...item} key={item.id} />
          ))}
    </Row>
  )
}
